const { query } = require("../../db/index");
const moment = require("moment");

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

// Get all posts from between a specified date and current date

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

// Get posts for specific user_id between a specific date and now

async function getUserNotesDateRange(date, userId) {
  const startDate = moment(date).format("YYYY-MM-DD");
  // sets startDate with date passed into function
  const endDate = moment().format("YYYY-MM-DD");

  const result = await query(`SELECT * FROM mentor_notes WHERE user_id = ${userId} AND meeting_date BETWEEN '${startDate}' AND '${endDate}' ORDER BY
      meeting_date DESC`);

  return result.rows;
}

module.exports = {
  getNotesAll,
  getNotesUser,
  getAllNotesDate,
  getAllNotesDateRange,
  getUserNotesDateRange,
};
