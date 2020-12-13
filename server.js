
const express = require("express");
const path = require("path");
const fs = require("fs");

// creating an "express" server
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./notes.html"));
});


app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT)
});