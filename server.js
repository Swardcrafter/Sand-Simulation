const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();

// Your existing route handlers...
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/script.js", (req, res) => {
	res.sendFile(path.join(__dirname, "script.js"));
});

app.get("/styles.css", (req, res) => {
	res.sendFile(path.join(__dirname, "styles.css"));
});

app.listen(3000, '0.0.0.0');