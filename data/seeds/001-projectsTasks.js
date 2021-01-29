
const projectTasks = [
  {
    project_id: 1,
    task_id: 1
  }
]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projectsTasks')
    .then(function () {
      // Inserts seed entries
      return knex('projectsTasks').insert(projectTasks);
    });
};
