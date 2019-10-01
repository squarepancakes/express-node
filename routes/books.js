const express = require("express");
const router = express.Router();
const book = require("../models/Books");

router.post("/", (req, res) => res.send("Book created"));

router.put("/", (req, res) => res.send("Book changed"));

router.get("/", (req, res) => res.send(book.getAllBooks()));

router.get("/:id", (req, res) => {
	const id = Number(req.params.id);
	const oneBook = book.getBookById(id);
	res.send(oneBook);
});

// router.post("/new", (req, res) => {
// 	res.send({ id: 10, title: "Waffle" });
// });

router.post("/new", (req, res) => {
	const newBook = req.body;
	book.addNewBook(newBook);
	res.send(newBook);
});

module.exports = router;
