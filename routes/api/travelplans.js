const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

//Load input validation
const validateTravelPlansInput = require("../../validation/travelPlans");

//Load user model
const TravelPlan = require("../../models/TravelPlan");

//@route POST api/travelplans/create
//@desc Add new travel plan
//@access Public
router.post("/create", (req,res) => {
  //Form validation
  const { errors, isValid } = validateTravelPlansInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newTravelPlan = new TravelPlan({
    destination: req.body.destination,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  });

  newTravelPlan.save().then(
    plan => {
      res.send("plan saved to db");
    })
    .catch(err => {
      res.status(400).send("unable to save to db");
    });
});

//@route GET api/travelPlans/retrieveAll
//@desc Retrieve all travel plans
//@access Public
router.get("/retrieveAll", (req,res) => {
  TravelPlan.find({})
  .then(plans => res.json(plans))
  .catch(err => console.log(err));
});

//@route GET api/travelPlans/retrieveTravelPlan
//@desc retrieve singular travel plan
//@access Public
router.get("/retrieveTravelPlan", (req,res) => {
  TravelPlan.findOne({ _id: req.body._id})
  .then(plan => res.json(plan))
  .catch(err => console.log(err));
});


module.exports = router;
