
const tasks = [
  {
    desc: "Talking nice guy",
    notes: "hodor hodor hodor"
  }
]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert(tasks);
    });
};
