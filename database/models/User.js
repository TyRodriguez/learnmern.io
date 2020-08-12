const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

///

// userSchema.methods = {
//   checkPassword: function (password) {
//     return bcrypt.compareSync(password, this.password);
//   },
//   hashPassword: plainTextPassword => {
//     return bcrypt.hashSync(plainTextPassword, 10);
//   }
// };

// userSchema.pre("save", function (next) {
//   if (!this.password) {
//     console.log("models/user.js =======NO PASSWORD PROVIDED=======");
//     next();
//   } else {
//     console.log("models/user.js hashPassword in pre save");
//     this.password = this.hashPassword(this.password);
//     next();
//   }
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
