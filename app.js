const express = require("express");
const app = express();

// definiting routes, while listen is to listen for routes
app.get("/", (req, res) => res.send("Apple pie!"));

app.get("/books", (req, res) => res.send("Here are apples!"));

app.post("/books", (req, res) => res.send("Apple created"));

app.put("/books", (req, res) => res.send("Apple changed"));

module.exports = app;
