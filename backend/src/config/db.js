const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:{
    rejectUnauthorized: false
  }
});

pool.connect()
  .then(() => console.log('✅ Connesso al DB Postgres!'))
  .catch(err => console.log('❌ Errore di connessione:', err))

module.exports = pool;