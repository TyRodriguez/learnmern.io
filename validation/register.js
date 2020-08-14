const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateSignUpInput(data) {
  let errors = {};

  //Convert empty fields to an empty string so we can use validator functions
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : "";

  //Name checks
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "First name is required";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Last name is required";
  }

  //email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "email required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "email invalid";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Confirm password field is required";
  }
  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Password must be at least 8 characters";
  }
  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
