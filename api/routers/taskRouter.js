const express = require("express");
const router = express.Router();
const Tasks = require("../helpers/taskModel.js");

router.get("/", (req, res) => {
 Tasks.getTasks()
   .then(tasks => {
     res.status(200).json(tasks);
   })
   .catch(err => {
     res.status(500).json({ message: "Error retrieving tasks." });
   });
});

router.post("/", (req, res) => {
    const taskData = req.body;
    Tasks.addTask(taskData)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to create new Task" });
      });
}); 


module.exports = router;