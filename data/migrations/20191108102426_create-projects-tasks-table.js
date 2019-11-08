exports.up = function(knex) {
    return knex.schema
        .createTable('projectsTasks', tbl => {
            
            tbl.increments();

            tbl
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references("projects.id")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");

            tbl
                .integer("task_id")
                .unsigned()
                .notNullable()
                .references("tasks.id")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");

            // tbl 
            //     .boolean("complete").defaultTo(false)
        })
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projectsTasks');
  };