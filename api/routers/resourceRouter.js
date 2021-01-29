const express = require("express");
const router = express.Router();
const Resource = require("../helpers/resourceModel.js");

router.get("/", (req, res) => {
 Resource.getResources()
   .then(resources => {
     res.status(200).json(resources);
   })
   .catch(err => {
     res.status(500).json({ message: "Error retrieving resources." });
   });
});

router.post("/", (req, res) => {
    const resource = req.body;
    Resource.addResource(resource)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to create new resource" });
      });
  }); 

module.exports = router;