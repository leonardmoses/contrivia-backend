// =======================================
//              DEPENDENCIES
// =======================================
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 4000
// pull MONGODB_URL from .env
const { PORT = 4000, MONGODB_URL } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
// import mongoose
const mongoose = require("mongoose");
// =======================================
//              DATABASE
// =======================================
// Establish Connection
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
// Connection Events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));
// =======================================
//              MODELS
// =======================================
const Trivia = require('./models/trivia.js');
// =======================================
//              MIDDLEWARE
// =======================================
// import middlware
const cors = require("cors");
const morgan = require("morgan");
// =======================================
//              ROUTES
// =======================================

// INDEX (get)
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

// trivia INDEX ROUTE
app.get("/trivia", async (req, res) => {
    try {
        // send all trivia
        res.json(await Trivia.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// NEW (get)


// DESTROY (delete)


// UPDATE (put)


// CREATE (post)
// trivia CREATE ROUTE
app.post("/trivia", async (req, res) => {
    try {
        // send all trivia
        res.json(await Trivia.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// EDIT (get) (put)


// SHOW (get)


// =======================================
//              LISTENER
// =======================================
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));