const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 9000;
const queries = require("./queries");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const authorRoutes = require("./routes/authors");
const booksRoutes = require("./routes/books");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

app.use("/api/authors", authorRoutes);
app.use("/api/books", booksRoutes);

app.listen(port, () => {
  console.log("listening on port", port);
});
