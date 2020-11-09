const { query } = require("../../db/index");

// Get all quotes

const sqlStatementAll = `SELECT * FROM quotes_table
`;

async function getQuotesAll() {
  const result = await query(sqlStatementAll);
  console.log(result.rows);
  return result.rows;
}

// Get quote by id

async function getQuotesID(id) {
  const result = await query(`SELECT * FROM quotes_table WHERE id = ${id}
    `);
  console.log(result.rows);
  return result.rows;
}

module.exports = {
  getQuotesAll,
  getQuotesID,
};
