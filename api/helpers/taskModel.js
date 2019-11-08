const db = require('../../data/dbConfig.js');

module.exports = {
  addTask,
  getTasks
};

function addTask(task) {
    return db('tasks').insert(task).then(taskData => {
        return taskData;
    })
};

function getTasks() {
    return db('tasks as t')
    .join('project as p', 'p.id', 't.project_id')
    .select('p.project_name', 'p.description as project_description', 't.*')
    .then(tasks => {
        const convertedTasks = tasks.map(task => {
            if(task.completed === 1) {
                task.completed = true;
            } else {
                task.completed = false;
            }
            return task;
        })
        return convertedTasks;
    });
};