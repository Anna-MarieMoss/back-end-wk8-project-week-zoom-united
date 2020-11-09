const express = require("express");
const router = express.Router();

const { getQuotesAll, getQuotesID } = require("../db/models/quotes");

///////// GET ALL QUOTES

router.get("/", async function (req, res) {
  const allQuotes = await getQuotesAll();
  console.log(`Success! Here's the quotes`);
  res.json({ payload: allQuotes });
});

///////// GET QUOTE BY ID

router.get("/:id", async function (req, res) {
  const quoteID = await getQuotesID(req.params.id);
  console.log(`Success! Here's the quote`);
  res.json({ payload: quoteID });
});

module.exports = router;
