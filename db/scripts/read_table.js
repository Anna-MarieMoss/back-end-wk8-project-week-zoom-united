const { query } = require("../index");

const sqlStatement = `SELECT * FROM quotes_table
`;

async function readTableAll() {
  const result = await query(sqlStatement);
  console.log(result.rows);
  return result.rows;
}

readTableAll();