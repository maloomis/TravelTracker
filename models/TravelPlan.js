const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const TravelPlanSchema = new Schema({
  destination: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

module.exports = Plan = mongoose.model("travelPlans", TravelPlanSchema);
