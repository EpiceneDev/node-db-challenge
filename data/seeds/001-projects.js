
const projects = [
  {
    name: "Project1",
    desc: "Bring em together",
    resource_id: "1"
  }
]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project')
    .then(function () {
      // Inserts seed entries
      return knex('project').insert(projects);
    });
};
