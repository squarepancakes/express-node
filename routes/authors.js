const express = require("express");
const router = express.Router();
const AuthorCircle = require("../models/AuthorCircle");
const BookShelf = require("../models/BookShelf");

router.post("/", (req, res) => res.send("Author added!"));

router.get("/", (req, res) => {
	return res.send(AuthorCircle.getAllAuthors());
});

router.get("/:authorId", (req, res) => {
	const id = Number(req.params.authorId);
	const theAuthor = AuthorCircle.getAuthorById(id);
	res.send(theAuthor);
});

router.get("/:authorId/books", (req, res) => {
	const id = Number(req.params.authorId);
	const booksByAuthor = BookShelf.getAllBooksByAuthor(id);
	res.send(booksByAuthor);
});

module.exports = router;
