var Book = require('../models/Book');

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
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

function show(req, res, next) {
  var id = req.params.id;

  Book.findById(id, function(err, book) {
    if(err) next(err);

    res.json(book);
  })
}


function update(req, res, next) {
  var id = req.params.id;

  Book.findById(id, function(err, book) {
    if(err) next(err);

    book.title = req.body.title;
    book.author = req.body.author;
    book.genre = req.body.genre;

    book.save(function(err, updatedBook) {
      if(err) next(err);

      res.json(updatedBook);
    });
  });
}

function destroy(req, res, next) {
  var id = req.params.id;

  Book.remove({_id: id}, function(err) {
    if(err) next(err);

    res.json({message: 'Book successfully deleted.  It sucked anyways.'});
  });
}
