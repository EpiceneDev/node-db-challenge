const resources = [
  {
    name: "Big Person",
    desc: "Very large and smarter than you think.",
    completed: "false"
  }
]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert(resources);
    });
};
