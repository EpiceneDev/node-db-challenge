const express = require("express");
const router = express.Router();
const Projects = require("../helpers/projectsModel.js");

router.get("/", (req, res) => {
 Projects.getProjects()
   .then(projects => {
     res.status(200).json(projects);
   })
   .catch(err => {
     res.status(500).json({ message: "Error retrieving projects." });
   });
});

router.post("/", (req, res) => {
    const project = req.body;

    Projects.add(project)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to create new project" });
      });
  }); 

module.exports = router;