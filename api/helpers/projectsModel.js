const db = require('../../data/dbConfig.js');

module.exports = {
  getProjects,
  addProject
};

function getProjects() {
  return db('projects');
};


function addProject(projectData) {
  return db('project').insert(projectData).then(result => {
      return result;
  })
};
