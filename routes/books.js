const express = require("express");
const router = express.Router();
const BookShelf = require("../models/BookShelf");

router.post("/", (req, res) => res.send("Book created"));

router.get("/", (req, res) => {
	const queries = req.query;
	if (queries.author || queries.title) {
		return res.send(BookShelf.filterBooks(queries));
	}

	return res.send(BookShelf.getAllBooks());
});

router.get("/:id", (req, res) => {
	const id = Number(req.params.id);
	const oneBook = BookShelf.getBookById(id);
	res.send(oneBook);
});

router.post("/new", (req, res) => {
	const newBook = req.body;
	BookShelf.addNewBook(newBook);
	res.send(newBook);
});

router.put("/:id", (req, res) => {
	try {
		const changes = req.body;
		const id = Number(req.params.id);
		BookShelf.updateBook(id, changes);
		res.send(changes);
	} catch (error) {
		res.status(404).send(error.message);
	}
});

router.delete("/:id", (req, res) => {
	const id = Number(req.params.id);
	BookShelf.deleteBook(id);
	res.send(BookShelf.getAllBooks());
});


module.exports = router;
