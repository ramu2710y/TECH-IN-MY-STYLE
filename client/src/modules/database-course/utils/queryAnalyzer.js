// SQL Query Analyzer — breaks queries into execution steps

export function analyzeSQLQuery(query) {
  const q = query.toUpperCase().trim();
  const steps = [];

  // Detect query type
  const isSELECT = q.startsWith('SELECT');
  const isINSERT = q.startsWith('INSERT');
  const isUPDATE = q.startsWith('UPDATE');
  const isDELETE = q.startsWith('DELETE');

  if (isSELECT) {
    // SELECT query breakdown
    steps.push({
      step: 1,
      phase: 'FROM',
      label: 'Source Tables',
      description: 'Identify and load source tables',
      color: '#00f0ff',
    });

    if (q.includes('JOIN')) {
      steps.push({
        step: steps.length + 1,
        phase: 'JOIN',
        label: 'Table Join',
        description: 'Combine rows from multiple tables using join conditions',
        color: '#ff9f1c',
      });
    }

    if (q.includes('WHERE')) {
      steps.push({
        step: steps.length + 1,
        phase: 'WHERE',
        label: 'Filter Rows',
        description: 'Apply WHERE clause to filter rows before grouping',
        color: '#ff9f1c',
      });
    }

    if (q.includes('GROUP BY')) {
      steps.push({
        step: steps.length + 1,
        phase: 'GROUP BY',
        label: 'Group & Aggregate',
        description: 'Group rows and apply aggregate functions (SUM, COUNT, AVG, etc.)',
        color: '#ff4444',
      });

      if (q.includes('HAVING')) {
        steps.push({
          step: steps.length + 1,
          phase: 'HAVING',
          label: 'Filter Groups',
          description: 'Apply HAVING clause to filter groups (executed after GROUP BY)',
          color: '#ff9f1c',
        });
      }
    }

    if (q.includes('ORDER BY')) {
      steps.push({
        step: steps.length + 1,
        phase: 'ORDER BY',
        label: 'Sort Results',
        description: 'Sort result set by specified column(s)',
        color: '#39ff14',
      });
    }

    if (q.includes('LIMIT') || q.includes('OFFSET')) {
      steps.push({
        step: steps.length + 1,
        phase: 'LIMIT',
        label: 'Pagination',
        description: 'Apply LIMIT/OFFSET for result set pagination',
        color: '#39ff14',
      });
    }

    // SELECT is always last
    steps.push({
      step: steps.length + 1,
      phase: 'SELECT',
      label: 'Project Columns',
      description: 'Select and display specified columns from result set',
      color: '#00f0ff',
    });
  } else if (isINSERT) {
    steps.push({
      step: 1,
      phase: 'VALIDATE',
      label: 'Validate Data',
      description: 'Validate data types and constraints',
      color: '#607d8b',
    });
    steps.push({
      step: 2,
      phase: 'INSERT',
      label: 'Insert Row',
      description: 'Insert new row into table',
      color: '#39ff14',
    });
  } else if (isUPDATE) {
    steps.push({
      step: 1,
      phase: 'WHERE',
      label: 'Find Rows',
      description: 'Locate rows matching WHERE condition',
      color: '#ff9f1c',
    });
    steps.push({
      step: 2,
      phase: 'UPDATE',
      label: 'Update Values',
      description: 'Update column values in matched rows',
      color: '#ff9f1c',
    });
  } else if (isDELETE) {
    steps.push({
      step: 1,
      phase: 'WHERE',
      label: 'Find Rows',
      description: 'Locate rows matching WHERE condition',
      color: '#ff9f1c',
    });
    steps.push({
      step: 2,
      phase: 'DELETE',
      label: 'Delete Rows',
      description: 'Remove matched rows from table',
      color: '#ff4444',
    });
  }

  return steps;
}

export function analyzeMongoQuery(query) {
  const steps = [];

  if (query.includes('.find(')) {
    steps.push({
      step: 1,
      phase: 'SCAN',
      label: 'Scan Collection',
      description: 'Scan all documents in collection',
      color: '#00f0ff',
    });
    steps.push({
      step: 2,
      phase: 'FILTER',
      label: 'Apply Filter',
      description: 'Apply $match query filter to documents',
      color: '#ff9f1c',
    });
    steps.push({
      step: 3,
      phase: 'PROJECT',
      label: 'Project Fields',
      description: 'Select and project specified fields',
      color: '#39ff14',
    });
  } else if (query.includes('.insertOne(') || query.includes('.insertMany(')) {
    steps.push({
      step: 1,
      phase: 'VALIDATE',
      label: 'Validate Doc',
      description: 'Validate document schema and types',
      color: '#607d8b',
    });
    steps.push({
      step: 2,
      phase: 'INSERT',
      label: 'Insert Doc',
      description: 'Insert document into collection',
      color: '#39ff14',
    });
  } else if (query.includes('.updateOne(') || query.includes('.updateMany(')) {
    steps.push({
      step: 1,
      phase: 'MATCH',
      label: 'Find Match',
      description: 'Find documents matching filter',
      color: '#ff9f1c',
    });
    steps.push({
      step: 2,
      phase: 'UPDATE',
      label: 'Update Fields',
      description: 'Apply update operators ($set, $inc, etc.)',
      color: '#ff9f1c',
    });
  } else if (query.includes('.deleteOne(') || query.includes('.deleteMany(')) {
    steps.push({
      step: 1,
      phase: 'MATCH',
      label: 'Find Match',
      description: 'Find documents matching filter',
      color: '#ff9f1c',
    });
    steps.push({
      step: 2,
      phase: 'DELETE',
      label: 'Delete Docs',
      description: 'Remove matched documents',
      color: '#ff4444',
    });
  } else if (query.includes('.aggregate(')) {
    steps.push({
      step: 1,
      phase: 'MATCH',
      label: '$match Stage',
      description: 'Filter documents in pipeline stage 1',
      color: '#ff9f1c',
    });
    steps.push({
      step: 2,
      phase: 'GROUP',
      label: '$group Stage',
      description: 'Group documents and aggregate values in stage 2',
      color: '#ff4444',
    });
    steps.push({
      step: 3,
      phase: 'SORT',
      label: '$sort Stage',
      description: 'Sort results in final stage',
      color: '#39ff14',
    });
  }

  return steps;
}
