const { query } = require("../index");

// const SQLStatement = `
//         CREATE TABLE quotes_table (
//             id SERIAL PRIMARY KEY,
//             quote TEXT
//         )
// `;

const SQLStatement = `
        CREATE TABLE mentor_notes (
            id SERIAL PRIMARY KEY,
            user_id INTEGER,
            name VARCHAR(50),
            meeting_date DATE NOT NULL DEFAULT CURRENT_DATE,
            week_topic VARCHAR(30),
            summary TEXT,
            challenges TEXT,
            wins TEXT,
            goals TEXT, 
            aspirations TEXT
            

        )
`;
async function createTable() {
  const res = await query(SQLStatement);
  console.log(res);
}

createTable();
