const express = require("express");
const router = express.Router();
const {Trip} = require("../models/");


//create user
router.post("/", (req, res) => {
  Trip.create(req.body)
    .then(newTrip => {
      res.json(newTrip);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});


//delete a user
router.delete("/:id", (req, res) => {
  Trip.destroy({
    where: {
      id: req.params.id
    }
  }).then(delTrip => {
    res.json(delTrip);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;
