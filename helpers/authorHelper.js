const queries = require("../queries");

exports.getAuthors = function(req, res) {
  queries.listAuthors().then(authors => res.json({ authors }));
};

exports.createAuthors = function(req, res) {
  queries.createAuthors(req.body).then(authors => {
    res.status(201).json({ authors });
  });
};
exports.getAuthor = function(req, res) {
  queries.readAuthors(req.params.authorId).then(authors => {
    res.json({ authors });
  });
};
exports.updateAuthor = function(req, res) {
  queries.updateAuthors(req.params.authorId, req.body).then(authors => {
    res.json({ authors: authors[0] });
  });
};
exports.deleteAuthor = function(req, res) {
  queries.deleteAuthors(req.params.authorId).then(() => {
    res.status(204).json({ deleted: true });
  });
};

module.exports = exports;
