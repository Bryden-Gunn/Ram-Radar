/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('rams', (table) => {
    table.increments('id').primary()
    table.string('month')
    table.string('plate')
    table.string('goods')
    table.integer('latitude')
    table.integer('longitude')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('rams')
};
