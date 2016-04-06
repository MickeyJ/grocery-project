
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', table =>{
    table.increments();
    table.string('name');
    table.integer('item_id').references('items.id');
    table.integer('user_id').references('users.id');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
