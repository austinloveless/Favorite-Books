const queries = require("../queries");

exports.getBooks = function(req, res) {
  queries.listBooks().then(books => res.json({ books }));
};

exports.createBooks = function(req, res) {
  queries.createBooks(req.body).then(books => {
    res.status(201).json({ books });
  });
};
exports.getBook = function(req, res) {
  queries.readBooks(req.params.bookId).then(books => {
    res.json({ books });
  });
};
exports.updateBook = function(req, res) {
  queries.updateBooks(req.params.bookId, req.body).then(books => {
    res.json({ books: books[0] });
  });
};
exports.deleteBook = function(req, res) {
  queries.deleteBooks(req.params.bookId).then(() => {
    res.status(204).json({ deleted: true });
  });
};

module.exports = exports;
