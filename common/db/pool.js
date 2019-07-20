const { Pool } = require('pg');

// FIXME конекшен в енвайромент переменную вынести
const connectionString = 'postgresql://posol:wow100500@dota2dbinstance.cebmgj44sx6l.eu-central-1.rds.amazonaws.com:5432/dota2';
const pool = new Pool({ connectionString });

module.exports = pool;
