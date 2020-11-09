const express = require("express");
const router = express.Router();
const app = express();

app.use(express.static("public"));
app.use(express.json());

///////// Import functions from models

const { getQuotesAll, getQuotesID } = require("../db/models/quotes");

///////// GET ALL QUOTES

app.get("/", async function (req, res) {
  const allQuotes = await getQuotesAll();
  console.log(`Success! Here's the quotes`);
  res.json({ payload: allQuotes });
});

///////// GET QUOTE BY ID

app.get("/:id", async function (req, res) {
  const quoteID = await getBookByID(req.params.id);
  res.json({ payload: quoteID });
});

module.exports = router;
