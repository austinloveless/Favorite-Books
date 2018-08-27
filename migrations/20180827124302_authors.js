exports.up = function(knex, Promise) {
  return knex.schema.createTable("authors", table => {
    table.increments("id");
    table.text("first_name");
    table.text("last_name");
    table.text("biography");
    table.text("portrait_url");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("authors");
};
