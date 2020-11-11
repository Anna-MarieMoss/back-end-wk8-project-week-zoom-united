const { query } = require("../../db/index");
const moment = require("moment");

/////////////// Get all notes from table

async function getNotesAll() {
  const result = await query(`SELECT * FROM mentor_notes ORDER BY
  meeting_date DESC
  `);
  return result.rows;
}

///////////////  Get all posts by user_id

async function getNotesUser(userId) {
  const result = await query(`SELECT * FROM mentor_notes WHERE user_id = ${userId} ORDER BY
  meeting_date DESC`);
  return result.rows;
}

///////////////  Get all posts from between a specified date and current date

async function getAllNotesDate(date) {
  const startDate = moment(date).format("YYYY-MM-DD");
  // sets startDate with date passed into function
  const endDate = moment().format("YYYY-MM-DD");
  // sets endDate to now

  return getAllNotesDateRange(startDate, endDate);
  // returns all posts between startDate and now using the getAllNotesDateRange function
}

async function getAllNotesDateRange(startDate, endDate) {
  const result = await query(`SELECT * FROM mentor_notes WHERE meeting_date BETWEEN '${startDate}' AND '${endDate}' ORDER BY
    meeting_date DESC`);
  return result.rows;
}

///////////////  Get posts for specific user_id between a specific date and now

async function getUserNotesDateRange(date, userId) {
  const startDate = moment(date).format("YYYY-MM-DD");
  // sets startDate with date passed into function
  const endDate = moment().format("YYYY-MM-DD");

  const result = await query(`SELECT * FROM mentor_notes WHERE user_id = ${userId} AND meeting_date BETWEEN '${startDate}' AND '${endDate}' ORDER BY
      meeting_date DESC`);

  return result.rows;
}

/////////////// Post new note into database

const sqlStatementPost = `
    INSERT INTO mentor_notes (user_id, name, meeting_date, week_topic, summary, challenges, wins, goals, aspirations) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;
    `;

async function postNewNote({
  user_id,
  name,
  meeting_date,
  week_topic,
  summary,
  challenges,
  wins,
  goals,
  aspirations,
}) {
  let values = [
    user_id,
    name,
    meeting_date,
    week_topic,
    summary,
    challenges,
    wins,
    goals,
    aspirations,
  ];
  const result = await query(sqlStatementPost, values);
  console.log(result);
}

//////////// Delete note by ID

async function deleteNoteById(id) {
  const result = await query(`DELETE FROM mentor_notes WHERE id = ${id}`);
  console.log(result);
}

module.exports = {
  getNotesAll,
  getNotesUser,
  getAllNotesDate,
  getAllNotesDateRange,
  getUserNotesDateRange,
  postNewNote,
  deleteNoteById,
};
