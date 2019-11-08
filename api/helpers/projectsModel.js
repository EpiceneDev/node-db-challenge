const db = require('../data/dbConfig.js');

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource,
  addTask,
  getTasks
};

function getProjects() {
  return db('projects');
}


function addProject(project) {
  return db('projects')
    .insert('project')
    .then(ids => {
      return getById(ids[0]);
    });
}

function getResources() {
    return db('resources');
  }
  
  
function addResource(resource) {
    return db('projects')
        .insert(resource)
        .then(ids => {
            return getById(ids[0]);
        });
}

function getTasks() {
    return db('posts');
}


function addTask(task) {
    return db('projects')
        .insert('project')
        .then(ids => {
            return getById(ids[0]);
        });
}