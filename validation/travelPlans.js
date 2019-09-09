const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateTravelPlansInput(data) {
  let errors = {};

  //Convert empty fields to an empty string so we can use validator functions
  data.destination = !isEmpty(data.destination) ? data.destination : "";
  data.startDate = !isEmpty(data.startDate) ? data.startDate : "";
  data.endDate = !isEmpty(data.endDate) ? data.endDate : "";

  console.log(data);
  console.log(errors);

  //Destination checks
  if (Validator.isEmpty(data.destination)) {
    errors.destination = "Destination field is required";
  }

  //Start date checks
  if (Validator.isEmpty(data.startDate)) {
    errors.startDate = "Start date field is required";
  }

  //End date checks
  if (Validator.isEmpty(data.endDate)) {
    errors.endDate = "Start date field is required";
  }

  console.log(errors);

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
