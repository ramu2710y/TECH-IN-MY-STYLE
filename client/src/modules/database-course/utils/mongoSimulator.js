// MongoDB query simulator — runs against in-memory JSON collections

// ── Helpers ──────────────────────────────────────────────────────────────────

function deepMatch(doc, filter) {
  for (const [key, val] of Object.entries(filter)) {
    if (key === '$and') return val.every(f => deepMatch(doc, f));
    if (key === '$or')  return val.some(f  => deepMatch(doc, f));
    if (key === '$nor') return !val.some(f => deepMatch(doc, f));

    const docVal = doc[key];

    if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
      for (const [op, operand] of Object.entries(val)) {
        if (op === '$gt'  && !(docVal >  operand)) return false;
        if (op === '$gte' && !(docVal >= operand)) return false;
        if (op === '$lt'  && !(docVal <  operand)) return false;
        if (op === '$lte' && !(docVal <= operand)) return false;
        if (op === '$ne'  && docVal === operand)   return false;
        if (op === '$in'  && !operand.includes(docVal)) return false;
        if (op === '$nin' &&  operand.includes(docVal)) return false;
        if (op === '$exists') {
          const exists = docVal !== undefined;
          if (operand && !exists) return false;
          if (!operand && exists) return false;
        }
        if (op === '$regex') {
          const re = new RegExp(operand, 'i');
          if (!re.test(String(docVal ?? ''))) return false;
        }
      }
    } else {
      if (Array.isArray(docVal)) { if (!docVal.includes(val)) return false; }
      else if (docVal !== val)   return false;
    }
  }
  return true;
}

function applySort(docs, sort) {
  return [...docs].sort((a, b) => {
    for (const [k, dir] of Object.entries(sort)) {
      if (a[k] < b[k]) return -dir;
      if (a[k] > b[k]) return  dir;
    }
    return 0;
  });
}

function applyProjection(doc, proj) {
  if (!proj || Object.keys(proj).length === 0) return doc;
  const include = Object.values(proj).some(v => v === 1);
  const result = {};
  if (include) {
    for (const k of Object.keys(proj)) if (proj[k]) result[k] = doc[k];
    if (proj._id !== 0 && doc._id !== undefined) result._id = doc._id;
  } else {
    Object.assign(result, doc);
    for (const k of Object.keys(proj)) if (!proj[k]) delete result[k];
  }
  return result;
}

function fieldVal(doc, expr) {
  if (typeof expr === 'string' && expr.startsWith('$')) return doc[expr.slice(1)];
  return expr;
}

// ── MongoCollection ───────────────────────────────────────────────────────────

class MongoCollection {
  constructor(name, docs) {
    this.name  = name;
    this._docs = docs.map((d, i) => ({ ...d, _id: d._id ?? i + 1 }));
    this._ops  = [];
  }

  // Cursor methods — return `this` for chaining
  find(filter = {}, proj = {}) {
    this._ops = [{ type: 'find', filter, proj }];
    return this;
  }
  sort(s)   { this._ops.push({ type: 'sort',  s }); return this; }
  limit(n)  { this._ops.push({ type: 'limit', n }); return this; }
  skip(n)   { this._ops.push({ type: 'skip',  n }); return this; }

  // Execute the cursor chain
  _exec() {
    let docs = [...this._docs];
    const findOp = this._ops.find(o => o.type === 'find');
    for (const op of this._ops) {
      if (op.type === 'find')  docs = docs.filter(d => deepMatch(d, op.filter));
      if (op.type === 'sort')  docs = applySort(docs, op.s);
      if (op.type === 'limit') docs = docs.slice(0, op.n);
      if (op.type === 'skip')  docs = docs.slice(op.n);
    }
    if (findOp?.proj && Object.keys(findOp.proj).length)
      docs = docs.map(d => applyProjection(d, findOp.proj));
    return docs;
  }

  findOne(filter = {}, proj = {}) {
    const docs = new MongoCollection(this.name, this._docs).find(filter, proj)._exec();
    return docs[0] ?? null;
  }

  insertOne(doc) {
    const newDoc = { ...doc, _id: doc._id ?? this._docs.length + 1 };
    this._docs.push(newDoc);
    return { acknowledged: true, insertedId: newDoc._id, doc: newDoc };
  }

  insertMany(docs) {
    const inserted = docs.map((d, i) => ({
      ...d, _id: d._id ?? this._docs.length + i + 1,
    }));
    this._docs.push(...inserted);
    return { acknowledged: true, insertedCount: inserted.length, docs: inserted };
  }

  updateOne(filter, update) {
    const idx = this._docs.findIndex(d => deepMatch(d, filter));
    if (idx === -1) return { acknowledged: true, matchedCount: 0, modifiedCount: 0 };
    const doc = { ...this._docs[idx] };
    this._applyUpdate(doc, update);
    this._docs[idx] = doc;
    return { acknowledged: true, matchedCount: 1, modifiedCount: 1, updatedDoc: doc };
  }

  updateMany(filter, update) {
    let count = 0;
    this._docs = this._docs.map(d => {
      if (!deepMatch(d, filter)) return d;
      count++;
      const doc = { ...d };
      this._applyUpdate(doc, update);
      return doc;
    });
    return { acknowledged: true, matchedCount: count, modifiedCount: count };
  }

  _applyUpdate(doc, update) {
    if (update.$set)   Object.assign(doc, update.$set);
    if (update.$unset) for (const k of Object.keys(update.$unset)) delete doc[k];
    if (update.$inc)   for (const [k, v] of Object.entries(update.$inc))  doc[k] = (doc[k] || 0) + v;
    if (update.$mul)   for (const [k, v] of Object.entries(update.$mul))  doc[k] = (doc[k] || 0) * v;
    if (update.$push)  for (const [k, v] of Object.entries(update.$push)) {
      if (!Array.isArray(doc[k])) doc[k] = [];
      doc[k].push(v);
    }
    if (update.$pull)  for (const [k, v] of Object.entries(update.$pull)) {
      if (Array.isArray(doc[k])) doc[k] = doc[k].filter(x => x !== v);
    }
    if (update.$addToSet) for (const [k, v] of Object.entries(update.$addToSet)) {
      if (!Array.isArray(doc[k])) doc[k] = [];
      if (!doc[k].includes(v)) doc[k].push(v);
    }
  }

  deleteOne(filter) {
    const idx = this._docs.findIndex(d => deepMatch(d, filter));
    if (idx === -1) return { acknowledged: true, deletedCount: 0 };
    const deleted = this._docs.splice(idx, 1)[0];
    return { acknowledged: true, deletedCount: 1, deletedDoc: deleted };
  }

  deleteMany(filter) {
    const before = this._docs.length;
    this._docs = this._docs.filter(d => !deepMatch(d, filter));
    return { acknowledged: true, deletedCount: before - this._docs.length };
  }

  countDocuments(filter = {}) {
    return this._docs.filter(d => deepMatch(d, filter)).length;
  }

  distinct(field, filter = {}) {
    const docs = this._docs.filter(d => deepMatch(d, filter));
    return [...new Set(docs.map(d => d[field]))];
  }

  aggregate(pipeline) {
    let docs = [...this._docs];
    for (const stage of pipeline) {
      if (stage.$match) {
        docs = docs.filter(d => deepMatch(d, stage.$match));
      }
      if (stage.$sort)  docs = applySort(docs, stage.$sort);
      if (stage.$limit) docs = docs.slice(0, stage.$limit);
      if (stage.$skip)  docs = docs.slice(stage.$skip);
      if (stage.$project) docs = docs.map(d => applyProjection(d, stage.$project));
      if (stage.$addFields) docs = docs.map(d => ({ ...d, ...stage.$addFields }));
      if (stage.$count) { docs = [{ [stage.$count]: docs.length }]; }

      if (stage.$unwind) {
        const raw   = stage.$unwind;
        const field = (typeof raw === 'string' ? raw : raw.path).replace(/^\$/, '');
        const unwound = [];
        for (const doc of docs) {
          if (Array.isArray(doc[field])) {
            if (doc[field].length === 0 && typeof raw === 'object' && raw.preserveNullAndEmptyArrays)
              unwound.push({ ...doc, [field]: undefined });
            else
              doc[field].forEach(v => unwound.push({ ...doc, [field]: v }));
          } else {
            unwound.push(doc);
          }
        }
        docs = unwound;
      }

      if (stage.$group) {
        const groups = {};
        for (const doc of docs) {
          const keyExpr = stage.$group._id;
          let key;
          if (keyExpr === null || keyExpr === undefined) {
            key = '__all__';
          } else if (typeof keyExpr === 'string' && keyExpr.startsWith('$')) {
            key = String(doc[keyExpr.slice(1)] ?? '__null__');
          } else {
            key = JSON.stringify(keyExpr);
          }
          if (!groups[key]) groups[key] = {
            _id: key === '__all__' ? null : (typeof keyExpr === 'string' && keyExpr.startsWith('$') ? doc[keyExpr.slice(1)] : keyExpr),
            _docs: [],
          };
          groups[key]._docs.push(doc);
        }

        docs = Object.values(groups).map(g => {
          const result = { _id: g._id };
          for (const [field, expr] of Object.entries(stage.$group)) {
            if (field === '_id') continue;
            if (expr.$sum !== undefined) {
              result[field] = typeof expr.$sum === 'number'
                ? expr.$sum * g._docs.length
                : g._docs.reduce((a, d) => a + (Number(fieldVal(d, expr.$sum)) || 0), 0);
            }
            if (expr.$avg !== undefined) {
              const vals = g._docs.map(d => Number(fieldVal(d, expr.$avg)) || 0);
              result[field] = vals.length ? vals.reduce((a, v) => a + v, 0) / vals.length : 0;
            }
            if (expr.$count !== undefined) result[field] = g._docs.length;
            if (expr.$max !== undefined) {
              const vals = g._docs.map(d => fieldVal(d, expr.$max));
              result[field] = vals.reduce((a, v) => (v > a ? v : a), vals[0]);
            }
            if (expr.$min !== undefined) {
              const vals = g._docs.map(d => fieldVal(d, expr.$min));
              result[field] = vals.reduce((a, v) => (v < a ? v : a), vals[0]);
            }
            if (expr.$push !== undefined) {
              result[field] = g._docs.map(d => fieldVal(d, expr.$push));
            }
            if (expr.$addToSet !== undefined) {
              const vals = g._docs.map(d => fieldVal(d, expr.$addToSet));
              result[field] = [...new Set(vals)];
            }
            if (expr.$first !== undefined) result[field] = fieldVal(g._docs[0], expr.$first);
            if (expr.$last  !== undefined) result[field] = fieldVal(g._docs[g._docs.length - 1], expr.$last);
          }
          return result;
        });
      }

      if (stage.$lookup) {
        const { from, localField, foreignField, as } = stage.$lookup;
        docs = docs.map(d => ({
          ...d,
          [as]: [], // collections not available inside pipeline — placeholder
        }));
      }
    }
    return docs;
  }
}

// ── MockDB ────────────────────────────────────────────────────────────────────

class MockDB {
  constructor(collections) {
    this._cols = {};
    for (const [name, docs] of Object.entries(collections)) {
      this._cols[name] = new MongoCollection(name, docs);
    }
  }
  collection(name) {
    if (!this._cols[name]) this._cols[name] = new MongoCollection(name, []);
    return this._cols[name];
  }
}

// ── Result normaliser ─────────────────────────────────────────────────────────

function normaliseResult(raw) {
  if (raw === null || raw === undefined) return { message: 'Query returned null.' };

  // Cursor (chained find)
  if (raw && typeof raw._exec === 'function') return { docs: raw._exec() };

  // Plain array (aggregate result)
  if (Array.isArray(raw)) return { docs: raw };

  // Number (countDocuments)
  if (typeof raw === 'number') return { message: `Result: ${raw}` };

  if (raw && typeof raw === 'object') {
    // Write-result object
    if (raw.acknowledged !== undefined) {
      const lines = [];
      if (raw.insertedId  !== undefined) lines.push(`Inserted _id: ${raw.insertedId}`);
      if (raw.insertedCount !== undefined) lines.push(`Inserted ${raw.insertedCount} document(s)`);
      if (raw.modifiedCount !== undefined) lines.push(`Matched: ${raw.matchedCount} | Modified: ${raw.modifiedCount}`);
      if (raw.deletedCount  !== undefined) lines.push(`Deleted: ${raw.deletedCount} document(s)`);

      const msg = lines.join('  ·  ') || 'Operation acknowledged.';
      if (raw.updatedDoc) return { docs: [raw.updatedDoc], message: msg };
      if (raw.doc)        return { docs: [raw.doc],        message: msg };
      if (raw.docs)       return { docs: raw.docs,         message: msg };
      return { message: msg };
    }
    // Single document
    return { docs: [raw] };
  }

  return { message: 'Query executed.' };
}

// ── Public entry point ────────────────────────────────────────────────────────

export function runMongoQuery(code, collections) {
  // 1. Strip single-line and block comments
  let cleaned = code
    .replace(/\/\/[^\n]*/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .trim();

  if (!cleaned) return { message: 'No command to execute.' };

  // 2. Build the DB proxy
  const db = new MockDB(collections);
  const proxy = new Proxy({}, {
    get(_, collName) { return db.collection(collName); },
  });

  // 3. Split into individual statements on semicolons,
  //    filter out blank lines, then run all-but-last as void statements
  //    and return the last one as an expression.
  const statements = cleaned
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0);

  if (statements.length === 0) return { message: 'No command to execute.' };

  const lastStmt   = statements[statements.length - 1];
  const priorStmts = statements.slice(0, -1);

  // Build function body: run prior statements, then return last as expression
  const body = [
    '"use strict";',
    ...priorStmts.map(s => `${s};`),
    `return (${lastStmt});`,
  ].join('\n');

  let raw;
  try {
    raw = new Function('db', body)(proxy);
  } catch (e) {
    throw new Error(e.message);
  }

  return normaliseResult(raw);
}
