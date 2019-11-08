
exports.up = function(knex) {
    return knex.schema
        .createTable('resources', tbl => {
            tbl.increments();

            tbl.text('desc', 128).notNullable();
            tbl.text('notes', 128);

            tbl.boolean('completed');
                
        })
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('resources');
  };