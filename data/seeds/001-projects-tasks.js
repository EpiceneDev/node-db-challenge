const projectTasks = [
  {
    project_id: "1",
    task_id: "1",
    completed: "false"
  }
]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project-tasks')
    .then(function () {
      // Inserts seed entries
      return knex('project-tasks').insert(projectTasks);
    });
};
