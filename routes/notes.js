const express = require("express");
const router = express.Router();

const {
  getNotesAll,
  getNotesUser,
  getAllNotesDate,
  getAllNotesDateRange,
  getUserNotesDateRange,
} = require("../db/models/notes");

///////// GET ALL NOTES

router.get("/", async function (req, res) {
  // If a date is passed through in params - return all notes between date given and current date
  if (req.query.date) {
    const notes = await getAllNotesDate(req.query.date);
    console.log(`Success! Here's all notes since ${req.query.date}`);
    res.json({ payload: notes });
    return;
  }

  // If no date is passed in params return all notes
  const allNotes = await getNotesAll();
  console.log(`Success! Here's the notes`);
  res.json({ payload: allNotes });
});

//// GET ALL NOTES FROM USER

router.get("/:id", async function (req, res) {
  // If a date is passed through in params - return all notes between date given and current date for specified user
  if (req.query.date) {
    const notes = await getUserNotesDateRange(req.query.date, req.params.id);
    console.log(
      `Success! Here's all notes since ${req.query.date} for User: ${req.params.id}`
    );
    res.json({ payload: notes });
    return;
  }
  // If no date is passed in params return all notes for specified user
  const userNotes = await getNotesUser(req.params.id);
  console.log(`Success! Here's the notes for User: ${req.params.id}`);
  res.json({ payload: userNotes });
});

module.exports = router;
