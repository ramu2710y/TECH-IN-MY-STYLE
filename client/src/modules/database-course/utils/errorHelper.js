// Error handler with helpful suggestions for SQL and MongoDB

export function getErrorSuggestion(error, mode) {
  const msg = String(error).toLowerCase();

  if (mode === 'sql') {
    // Common SQL errors
    if (msg.includes('syntax error')) {
      return {
        hint: '❌ Syntax Error',
        suggestion: 'Check for missing commas, semicolons, or mismatched parentheses. Verify table/column names are correct.',
        examples: [
          'SELECT * FROM users WHERE id = 1;',
          'SELECT name, email FROM users;',
        ]
      };
    }
    if (msg.includes('no such table')) {
      return {
        hint: '❌ Table Not Found',
        suggestion: 'The table name does not exist in this dataset. Check your table name spelling and use available tables from the schema.',
        fix: 'Click SCHEMA button to see available tables.'
      };
    }
    if (msg.includes('no such column')) {
      return {
        hint: '❌ Column Not Found',
        suggestion: 'The column name is not in the table. Check column spelling or use SELECT * to see all columns.',
        fix: 'Click SCHEMA button to see available columns for each table.'
      };
    }
    if (msg.includes('ambiguous')) {
      return {
        hint: '❌ Ambiguous Column',
        suggestion: 'When joining tables, specify which table the column comes from using table.column syntax.',
        example: 'SELECT u.name, o.id FROM users u JOIN orders o ON u.id = o.user_id;'
      };
    }
    if (msg.includes('not an aggregate')) {
      return {
        hint: '❌ Aggregate Function Error',
        suggestion: 'When using GROUP BY, all non-aggregated columns must be in the GROUP BY clause.',
        example: 'SELECT category, COUNT(*) FROM products GROUP BY category;'
      };
    }
    return {
      hint: '❌ SQL Error',
      suggestion: 'Check your SQL syntax and verify all table and column names exist.',
      error: String(error).substring(0, 80)
    };
  } else {
    // MongoDB errors
    if (msg.includes('unexpected token') || msg.includes('syntax error')) {
      return {
        hint: '❌ JavaScript Syntax Error',
        suggestion: 'MongoDB queries use JavaScript. Check for mismatched braces, unclosed strings, or missing commas.',
        examples: [
          'db.users.find({ city: "New York" });',
          'db.products.find({ price: { $gt: 100 } });',
        ]
      };
    }
    if (msg.includes('field') && msg.includes('undefined')) {
      return {
        hint: '❌ Field Error',
        suggestion: 'Make sure the field name exists in documents. Use find({}) to see sample data first.',
        fix: 'Use db.collection.findOne() to inspect a single document first.'
      };
    }
    if (msg.includes('not a function')) {
      return {
        hint: '❌ Invalid Method',
        suggestion: 'The method is not available. Supported methods: find, insertOne, insertMany, updateOne, updateMany, deleteOne, deleteMany, aggregate, countDocuments, distinct.',
        example: 'db.users.find({ name: "Alice" });'
      };
    }
    return {
      hint: '❌ MongoDB Error',
      suggestion: 'Check your query syntax. Use valid MongoDB operations and proper JavaScript syntax.',
      error: String(error).substring(0, 80)
    };
  }
}

export function getSQLHints() {
  return [
    { keyword: 'SELECT *', desc: 'Get all rows and columns' },
    { keyword: 'WHERE col = val', desc: 'Filter rows by condition' },
    { keyword: 'JOIN', desc: 'Combine tables based on condition' },
    { keyword: 'GROUP BY', desc: 'Group rows and aggregate' },
    { keyword: 'ORDER BY col ASC/DESC', desc: 'Sort results' },
    { keyword: 'LIMIT n', desc: 'Return only first n rows' },
  ];
}

export function getMongoHints() {
  return [
    { keyword: 'db.col.find({})', desc: 'Get all documents' },
    { keyword: 'db.col.find({field: "val"})', desc: 'Filter documents' },
    { keyword: 'db.col.insertOne({...})', desc: 'Insert a document' },
    { keyword: 'db.col.updateOne({...})', desc: 'Update a document' },
    { keyword: 'db.col.deleteOne({...})', desc: 'Delete a document' },
    { keyword: 'db.col.aggregate([...])', desc: 'Pipeline aggregation' },
  ];
}
