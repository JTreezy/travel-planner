const express = require("express");
const router = express.Router();
const {Traveler, Location, Trip} = require("../models/");


//find all
router.get("/", (req, res) => {
  Traveler.findAll({
  
  })
    .then(dbTravelers => {
      res.json(dbTravelers);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
//find one
router.get("/:id", (req, res) => {
  Traveler.findByPk(req.params.id,{
    include:[{
      model:Location,
      through:[Trip]
    }]
  })
    .then(dbTraveler => {
      res.json(dbTraveler);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create Traveler
router.post("/", (req, res) => {
  Traveler.create(req.body)
    .then(newTraveler => {
      res.json(newTraveler);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//update Traveler
router.put("/:id", (req, res) => {
  Traveler.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedTraveler => {
    res.json(updatedTraveler);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

//delete a Traveler
router.delete("/:id", (req, res) => {
  Traveler.destroy({
    where: {
      id: req.params.id
    }
  }).then(delTraveler => {
    res.json(delTraveler);
    res.status(200).json({ msg: "Successful Delete"})
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;