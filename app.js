const express = require("express");
const app = express();

app.use(express.json());

const middleware = (req, res, next) => {
	// console.log("Hello there");
	next();
};
app.use(middleware);

const index = require("./routes/index");
app.use("/", index);

const books = require("./routes/books");
app.use("/books", books);

module.exports = app;
