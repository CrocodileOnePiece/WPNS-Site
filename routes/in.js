const express = require('express');
const iO = express.Router();

iO.get('/', function (req, res) { 
    res.render('In-Office');
});

module.exports = iO;