const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const quotesRouter = require("./routes/quotes");
const notesRouter = require("./routes/notes");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/quotes", quotesRouter);
app.use("/notes", notesRouter);

module.exports = app;
