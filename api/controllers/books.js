var Book = require('../models/Book');

module.exports = {
  index: index,
  create: create
}

function index(req, res, next) {
  Book.find({}, function(err, books) {
    if(err) next(err);

    res.json(books)
  }).select('-__v');
}

function create(req, res, next) {
  var book = new Book(req.body);

  book.save(function(err, savedBook) {
    if(err) next(err);

    res.json(savedBook);
  });
}
