const database = require("./knex/knex");

module.exports = {
  //books queries
  listBooks() {
    return database("books").select();
  },
  readBooks(id) {
    return database("books")
      .select()
      .where("id", id)
      .first();
  },
  createBooks(books) {
    return database("books")
      .from("books")
      .insert(books)
      .returning("*")
      .then(record => record[0]);
  },
  updateBooks(id, books) {
    return database("books")
      .update(books)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  deleteBooks(id) {
    return database("books")
      .delete()
      .where("id", id);
  },
  //author queries
  listAuthors() {
    return database("authors").select();
  },
  readAuthors(id) {
    return database("authors")
      .select()
      .where("id", id)
      .first();
  },
  createAuthors(authors) {
    return database("authors")
      .from("authors")
      .insert(authors)
      .returning("*")
      .then(record => record[0]);
  },
  updateAuthors(id, authors) {
    return database("authors")
      .update(authors)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  deleteAuthors(id) {
    return database("authors")
      .delete()
      .where("id", id);
  }
};
