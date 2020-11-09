const { query } = require("../index");

const SQLStatement = `
        CREATE TABLE quotes_table (
            id SERIAL PRIMARY KEY,
            quote TEXT
        )
`;

async function createTable() {
  const res = await query(SQLStatement);
  console.log(res);
}

createTable();
