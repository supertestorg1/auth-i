exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', t => {
    t.increments();
    t.string('name').notNullable();
    t.string('pass').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.scehma.dropTable('users');
};