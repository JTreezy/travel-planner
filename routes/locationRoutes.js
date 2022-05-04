const express = require("express");
const router = express.Router();
const {Location, Traveler, Trip} = require("../models/");


//find all
router.get("/", (req, res) => {
  Location.findAll()
    .then(dbLocations => {
      res.json(dbLocations);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
//find one
router.get("/:id", (req, res) => {
  Location.findByPk(req.params.id,{
    include:[Trip]
  })
    .then(dbLocations => {
      res.json(dbLocations);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create Location
router.post("/", (req, res) => {
  Location.create(req.body)
    .then(newLocation => {
      res.json(newLocation);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//delete a Location
router.delete("/:id", (req, res) => {
  Location.destroy({
    where: {
      id: req.params.id
    }
  }).then(delTraveler => {
    res.json(delTraveler);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;