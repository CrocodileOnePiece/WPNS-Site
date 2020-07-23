const express = require('express');
const c = express.Router();

c.get('/', function (req, res) { 
    res.render('contact');
});

module.exports = c;