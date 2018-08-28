var express = require("express");
var router = express.Router();
var helpers = require("../helpers/bookHelper");
var joinHelpers = require("../helpers/booksAuthorsHelpers");

router
  .route("/")
  .get(joinHelpers.listBooksShow)
  .post(joinHelpers.postBook);

router.route("/new").get(helpers.showNew);

router
  .route("/:bookId")
  .get(joinHelpers.listOneBook)
  .put(helpers.updateBook)
  .delete(helpers.deleteBook);

module.exports = router;
