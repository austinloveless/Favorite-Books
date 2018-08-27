var express = require("express");
var router = express.Router();
var helpers = require("../helpers/bookHelper");

router
  .route("/")
  .get(helpers.getBooks)
  .post(helpers.createBooks);

router
  .route("/:bookId")
  .get(helpers.getBook)
  .put(helpers.updateBook)
  .delete(helpers.deleteBook);

module.exports = router;
