const express = require("express");
const newRouter = express.Router();
const AuthorCircle = require("../models/AuthorCircle");

newRouter.post("/", (req, res) => res.send("Author added!"));

newRouter.get("/", (req, res) => {
	return res.send(AuthorCircle.getAllAuthors());
});

newRouter.get("/:authorId", (req, res) => {
	const id = Number(req.params.authorId);
	return res.send({ author: "Ashley", authorId: 5 });
});

module.exports = newRouter;
