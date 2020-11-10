const express = require("express");
const router = express.Router();

const {
  getNotesAll,
  getNotesUser,
  getAllNotesDate,
  getAllNotesDateRange,
  getUserNotesDate,
  getUserNotesDateRange,
} = require("../db/models/notes");

///////// GET ALL NOTES

router.get("/", async function (req, res) {
  const allNotes = await getNotesAll();
  console.log(`Success! Here's the notes`);
  res.json({ payload: allNotes });
});

//// GET ALL NOTES FROM USER

router.get("/:id", async function (req, res) {
  const userNotes = await getNotesUser(req.params.id);
  console.log(`Success! Here's the notes for User: ${req.params.id}`);
  res.json({ payload: userNotes });
});

// //// GET ALL NOTES FROM SPECIFIC DATE

// router.get("/", async function (req, res) {
//   const userNotes = await getNotesUser(req.params.id);
//   console.log(`Success! Here's the notes for User: ${req.params.id}`);
//   res.json({ payload: userNotes });
// });

module.exports = router;
