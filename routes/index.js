const express = require("express")
const router = express.Router();

// definiting routes, while listen is to listen for routes

router.get("/", (req, res) => res.send("The Bookshelf!"));

module.exports = router