
exports.up = function(knex) {
    return knex.schema
        .createTable('project', tbl => {
            tbl.increments();
            
            tbl.string("name").notNullable().unique();

            tbl.text('desc', 256);

            tbl.boolean('completed').defaultTo(false);

            tbl.integer('resource_id')
                .unsigned()
                .references("resources.id")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        })
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('project');
  };