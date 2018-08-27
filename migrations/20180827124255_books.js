exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", table => {
    table.increments("id");
    table.text("book_title");
    table.text("book_genre");
    table.text("book_description");
    table.text("book_cover_url");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("books");
};
