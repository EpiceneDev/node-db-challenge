const express = require("express");
const router = express.Router();
const Resource = require("../helpers/projectsModel.js");

router.get("/", (req, res) => {
 Resource.getResources()
   .then(resources => {
     res.status(200).json(resources);
   })
   .catch(err => {
     res.status(500).json({ message: "Error retrieving resources." });
   });
});

router.post('/', (req, res) => {
    const resource = req.body;
  
    db('projects').insert(resource)
    .then(ids => {
      res.status(201).json({ created: ids[0] });
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });

module.exports = router;