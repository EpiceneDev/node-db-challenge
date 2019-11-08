const express = require("express");
const router = express.Router();
const Tasks = require("../helpers/projectsModel.js");

router.get("/", (req, res) => {
 Tasks.getTasks()
   .then(tasks => {
     res.status(200).json(tasks);
   })
   .catch(err => {
     res.status(500).json({ message: "Error retrieving tasks." });
   });
});

router.post('/', (req, res) => {
    const task = req.body;
  
    db('projects').insert(task)
    .then(ids => {
      res.status(201).json({ created: ids[0] });
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

module.exports = router;