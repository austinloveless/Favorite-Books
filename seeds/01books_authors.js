exports.seed = function(knex, Promise) {
  return knex("books_authors")
    .del()
    .then(function() {
      return knex("books_authors").insert([
        { id: 1, authors_id: 1, books_id: 1 },
        { id: 2, authors_id: 5, books_id: 1 },
        { id: 3, authors_id: 6, books_id: 1 },
        { id: 4, authors_id: 2, books_id: 2 },
        { id: 5, authors_id: 3, books_id: 3 },
        { id: 6, authors_id: 4, books_id: 4 }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE books_authors_id_seq RESTART WITH 9;");
    });
};
