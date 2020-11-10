const { query } = require("../index");
const mentorData = require("../samples_data/mentor_date")

// const sqlStatement = `
//     INSERT INTO quotes_table (quote) 
//     VALUES ($1) RETURNING *;
//     `;

const sqlStatement = `
    INSERT INTO mentor_notes (user_id, name, meeting_date, week_topic, summary, challenges, wins, goals, aspirations) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;
    `;

  

async function populateTable(array) {
  for (let i = 0; i < array.length; i++) {
    let values = [array[i].user_id, array[i].name, array[i].meeting_date, array[i].week_topic, array[i].summary, array[i].challenges, array[i].wins, array[i].goals, array[i].aspirations];
    const result = await query(sqlStatement, values);
    console.log(result);
  }
}
populateTable(mentorData);
