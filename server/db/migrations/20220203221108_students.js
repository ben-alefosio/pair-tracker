exports.up = function (knex) {
  return knex.schema.createTable('students', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('photo')
    table.boolean('paired')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('students')
}
