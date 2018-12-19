"use strict";

require("dotenv").config();

// Express.js server
const express = require("express");
const app = express();

// Enable CORS
const cors = require("cors");
app.use(cors());

// Default landing page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// API endpoint
app.get("/api/whoami", (req, res) => {
  res.json({ ipaddress: 0, langauge: 0, software: 0 });
});

// Listen for requests
var listener = app.listen(process.env.PORT, () => {
  console.log("Listening on port " + listener.address().port);
});
