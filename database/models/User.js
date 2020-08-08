const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("users", userSchema);

module.exports = User;
