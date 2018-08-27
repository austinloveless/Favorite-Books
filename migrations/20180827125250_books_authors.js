exports.up = function(knex, Promise) {
  return knex.schema.createTable("books_authors", table => {
    table.increments("id");
    table.integer("books_id");
    table.integer("authors_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("books_authors");
};
