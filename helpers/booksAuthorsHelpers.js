const queries = require("../queries");

exports.listBooksAuthors = function(req, res) {
  queries
    .listBooksAuthors()
    .then(books_authors =>
      res.render("index", { books_authors: books_authors })
    );
};
exports.listBooksShow = function(req, res) {
  queries
    .listBooksAuthors()
    .then(books_authors =>
      res.render("books", { books_authors: books_authors })
    );
};

exports.listOneBook = function(req, res) {
  console.log("req.params.bookId", req.params.bookId);
  queries.readBooksAndAuthors(req.params.bookId).then(books => {
    console.log("books", books, "authors", authors);

    return queries.listAuthors().then(authors => {
      res.render("showBook", { books: books, authors: authors });
    });
  });
};

exports.postBook = function(req, res) {
  queries.postBooks(req.body.book).then(books => {
    res.redirect("/api/books");
  });
};

module.exports = exports;
