const express= require('express');
const router = express.Router();

app.get("/", (req, res) => {
    res.render('index');
    });

app.get("/register", (req, res) => {
    res.render('register');
    });

module.exports = router;