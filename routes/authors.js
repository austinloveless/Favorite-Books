var express = require("express");
var router = express.Router();
var helpers = require("../helpers/authorHelper");

router
  .route("/")
  .get(helpers.getAuthors)
  .post(helpers.createAuthors);

router
  .route("/:authorId")
  .get(helpers.getAuthor)
  .put(helpers.updateAuthor)
  .delete(helpers.deleteAuthor);

module.exports = router;
