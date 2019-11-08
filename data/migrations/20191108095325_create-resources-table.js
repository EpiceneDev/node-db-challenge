
exports.up = function(knex) {
    return knex.schema
        .createTable('resources', tbl => {

            tbl.increments();
            
            tbl.string("name").notNullable();
            tbl.text('desc', 128).notNullable();

            // tbl.boolean('completed');
                
        })
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('resources');
  };