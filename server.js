"use strict";

require("dotenv").config();

// Express.js server
const express = require("express");
const app = express();

// Middleware for exposing user-agent information
const useragent = require("express-useragent");
app.use(useragent.express());

// Enable CORS
const cors = require("cors");
app.use(cors());

// Default landing page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// API endpoint
app.get("/api/whoami", (req, res) => {
  res.json({
    ipadress: req.ip,
    language: req.acceptsLanguages().join(", "),
    software:
      "OS: " +
      req.useragent.os +
      ", Browser: " +
      req.useragent.browser +
      " (v" +
      req.useragent.version +
      ")"
  });
});

// Listen for requests
var listener = app.listen(process.env.PORT, () => {
  console.log("Listening on port " + listener.address().port);
});
