const express = require("express");

var app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.json("");
});

module.exports = app;