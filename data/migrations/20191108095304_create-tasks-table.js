
exports.up = function(knex) {
    return knex.schema
        .createTable('tasks', tbl => {

            tbl.increments();

            tbl.text('desc', 128).notNullable();
            tbl.text('notes', 256);
        })
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('tasks');
  };
