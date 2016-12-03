var express = require('express');
var router = express.Router();
var booksController = require('../controllers/books')

/* GET home page. */
// API Documentation Landing Page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WSMD38' });
});

// API Routes, respond with JSON only
router.route('/api/books')
  .get(booksController.index)
  .post(booksController.create);

router.route('/api/books/:id')
  .get(booksController.show)
  .patch(booksController.update)
  .delete(booksController.destroy);

module.exports = router;
