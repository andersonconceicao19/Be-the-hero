
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments('id').primary();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('values').notNullable();

        table.string('ongs_Id').notNullable();
        table.foreign('ongs_Id').references('id').inTable('ongs');
      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
}