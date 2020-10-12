const express = require('express');
const bodyparser = require('body-parser');
const db = require('./db');


const app = express();
app.use(bodyparser.json()); 

const userController = require('./controllers/user')

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use('/user',userController)

app.get("/api/login", (req, res, next) => {
    res.status(200).json({
        message: "logged in"
    });
});

module.exports = app;