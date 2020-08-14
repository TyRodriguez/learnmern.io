// require("dotenv").config({ path: ".env" });
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const apiRoutes = require("./routes/api");
const {initPassport} = require("./config/passport");
const PORT = process.env.PORT || 5000;
const app = express();

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/usersdb", {
    useNewUrlParser: true,
    useUnifiedTopology:true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//middleware
// app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// require("./config/passport")(passport)
initPassport(app)
// API Routes
app.use("/api",apiRoutes);

// app.post("/signup", (req, res) => {
//   const today = new Date();
//   const userData = {
//     firstName: req.body.firstname,
//     lastName: req.body.lastname,
//     email: req.body.email,
//     password: req.body.password,
//     created: today
//   };

//   User.findOne({
//     email: req.body.email
//   })
//     .then(user => {
//       if (!user) {
//         bcrypt.hash(req.body.password, 10, (err, hash) => {
//           userData.password = hash;
//           User.create(userData)
//             .then(user => {
//               res.json({ status: user.email + ` registered!` });
//             })
//             .catch(err => {
//               res.send("error:" + err);
//             });
//         });
//       } else {
//         res.json({ error: "User already exists" });
//       }
//     })
//     .catch(err => {
//       res.send("error" + err);
//     });
// });

// app.post("/signin", (req, res) => {
//   User.findOne({
//     email: req.body.email
//   })
//     .then(user => {
//       if (user) {
//         if (bcrypt.compareSync(req.body.password, user.passwprd)) {
//           const payload = {
//             _id: user._id,
//             email: user.email
//           };
//           let token = jwt.sign(payload, process.env.SECRET_KEY, {
//             expiresIn: 1440
//           });
//           res.send(token);
//         } else {
//           res.json({ error: "User does not exist!" });
//         }
//       } else {
//         res.json({ error: "User does not exist!" });
//       }
//     })
//     .catch(err => {
//       res.send("error: " + err);
//     });
// });

// If no API routes are hit, send the React app

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});