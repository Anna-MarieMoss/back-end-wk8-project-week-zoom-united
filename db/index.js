const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Export module

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
