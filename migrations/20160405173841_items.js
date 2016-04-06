
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', table =>{
    table.increments();
    table.string('name');
    table.integer('price');
    table.string('info');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items');
};
