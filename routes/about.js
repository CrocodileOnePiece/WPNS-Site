const express = require('express');
const a = express.Router();

a.get('/', function (req, res) { 
    res.render('About');
});

module.exports = a;