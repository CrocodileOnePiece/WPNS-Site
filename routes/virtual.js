const expres = require('express');
const v = expres.Router();

v.get('/', function (req, res) { 
    res.render('virtual');
});

module.exports = v;