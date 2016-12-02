var Book = require('../models/Book');

module.exports = {
  index: index
}

function index(req, res, next) {
  Book.find({}, function(err, books) {
    if(err) next(err);

    res.json(books)
  }).select('-__v');
}
