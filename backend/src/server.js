const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Sage-Marigold Backend!");
});

app.get("/health", (req, res) => {
    res.json({
        ok: true,
        service: "backend",
        timestamp: new Date().toISOString()
    });
});

module.exports = app;