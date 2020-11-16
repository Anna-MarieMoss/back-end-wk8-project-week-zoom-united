
const { Pool } = require("pg");

const pool = new Pool({
  // user: process.env.PGUSER,
  // host: process.env.PGHOST,
  // database: process.env.PGDATABASE,
  // password: process.env.PGPASSWORD,
  // port: 5432,
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Export module

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};



