var express = require('express');
var router = express.Router();

/* GET home page. */
// API Documentation Landing Page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WSMD38' });
});

module.exports = router;
