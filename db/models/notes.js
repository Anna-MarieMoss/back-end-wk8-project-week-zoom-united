const { query } = require("../../db/index");

// Get all notes from table

const sqlStatementAll = `SELECT * FROM mentor_notes ORDER BY
meeting_date DESC
`;

async function getNotesAll() {
  const result = await query(sqlStatementAll);
  console.log(result.rows);
  return result.rows;
}

// Get all posts by user_id (order by date)

async function getNotesUser(userId) {
  const result = await query(`SELECT * FROM mentor_notes WHERE user_id = ${userId} ORDER BY
  meeting_date DESC`);
  console.log(result.rows);
  return result.rows;
}

// Get all posts from a specific date

async function getAllNotesDate(date) {
  const result = await query(`SELECT * FROM mentor_notes WHERE meeting_date = ${date} ORDER BY
    meeting_date DESC`);
  console.log(result.rows);
  return result.rows;
}

// Get all posts from a specific date range

async function getAllNotesDateRange(startDate, endDate) {
  const result = await query(`SELECT * FROM mentor_notes WHERE meeting_date BETWEEN ${startDate} AND ${endDate} ORDER BY
    meeting_date DESC`);
  console.log(result.rows);
  return result.rows;
}

// Get posts for specific user_id from a specific date

async function getUserNotesDate(date, userId) {
  const result = await query(`SELECT * FROM mentor_notes WHERE user_id = ${userId} AND meeting_date = ${date} ORDER BY
      meeting_date DESC`);
  console.log(result.rows);
  return result.rows;
}

// Get posts for specific user_id from a date range

async function getUserNotesDateRange(startDate, endDate, userId) {
  const result = await query(`SELECT * FROM mentor_notes WHERE user_id = ${userId} AND meeting_date BETWEEN ${startDate} AND ${endDate} ORDER BY
      meeting_date DESC`);
  console.log(result.rows);
  return result.rows;
}

module.exports = {
  getNotesAll,
  getNotesUser,
  getAllNotesDate,
  getAllNotesDateRange,
  getUserNotesDate,
  getUserNotesDateRange,
};
