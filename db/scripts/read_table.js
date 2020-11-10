const { query } = require("../index");

const sqlStatement = `SELECT * FROM mentor_notes
`;

async function readTableAll() {
  const result = await query(sqlStatement);
  console.log(result.rows);
  return result.rows;
}

readTableAll();