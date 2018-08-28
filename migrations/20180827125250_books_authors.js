exports.up = function(knex, Promise) {
  return knex.schema.createTable("books_authors", table => {
    table.increments("id");
    table.integer("books_id");
    table.integer("authors_id");
    table.text("first_name");
    table.text("last_name");
    table.text("title");
    table.text("author_image");
    table.text("author_bio");
    table.text("description");
    table.text("genre");
    table.text("cover_url");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("books_authors");
};
