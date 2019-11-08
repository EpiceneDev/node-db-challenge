
const projects = [
  {
    name: "Project1",
    desc: "Bring em together",
    completed: "false"
  }
]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert(projects);
    });
};
