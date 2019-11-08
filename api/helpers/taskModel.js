const db = require('../../data/dbConfig.js');

module.exports = {
  addTask,
  getTasks
};


function getTasks() {
    return db('tasks');
};


function addTask(taskData) {
  return db('tasks').insert(taskData).then(result => {
      return result;
  })
};