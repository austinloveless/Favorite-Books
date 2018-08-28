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
  },

  //list all books_authors
  listBooksAuthors() {
    return database("books_authors")
      .join("books", "books_authors.books_id", "=", "books.id")
      .join("authors", "books_authors.authors_id", "=", "authors.id")
      .select({
        book_id: "books.id",
        title: "books.book_title",
        first_name: "authors.first_name",
        last_name: "authors.last_name",
        author_image: "authors.portrait_url",
        author_bio: "authors.biography",
        genre: "books.book_genre",
        description: "book_description",
        cover_url: "books.book_cover_url"
      });
  },
  readBooksAndAuthors(id) {
    return database("books_authors")
      .join("books", "books_authors.books_id", "=", "books.id")
      .join("authors", "books_authors.authors_id", "=", "authors.id")
      .select({
        book_id: "books.id",
        title: "books.book_title",
        first_name: "authors.first_name",
        last_name: "authors.last_name",
        author_image: "authors.portrait_url",
        author_bio: "authors.biography",
        genre: "books.book_genre",
        description: "book_description",
        cover_url: "books.book_cover_url"
      })
      .where("books_authors.books_id", id)
      .first();
  },

  postBooks(authorId, book) {
    if (!Number.isInteger(authorId)) {
      throw new Error("Invalid authorId.");
    }
    if (typeof book !== "object") {
      throw new Error("Invalid book. Object required.");
    }

    return database("books")
      .insert(book)
      .returning("*")
      .then(record => record[0])
      .then(newBook => {
        // authorId & newBook.id
        console.log("newbook", newBook);
        return database("books_authors").insert({
          authors_id: authorId,
          books_id: newBook.id
        });
      });
  }
};
