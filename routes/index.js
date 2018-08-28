var express = require("express");
var router = express.Router();
var helpers = require("../helpers/booksAuthorsHelpers");

router.route("/").get(helpers.listBooksAuthors);

module.exports = router;
