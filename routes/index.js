const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Welcome to the Traveler Planner!")
})

const travelerRoutes = require("./travelerRoutes");
router.use("/api/travelers",travelerRoutes)

const locationRoutes = require("./locationRoutes");
router.use("/api/locations",locationRoutes)

const tripRoutes = require("./tripRoutes");
router.use("/api/trips",tripRoutes)

module.exports = router;