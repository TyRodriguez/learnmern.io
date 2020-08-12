const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
// router.route("/").get(usersController.findAll).post(usersController.create);
router.route("/").get(usersController.findOne)
// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

//matches with "/signup" or "/signin" or "/dashboard"
router
  .route("/signup")
  .get(usersController.findOne)
  .post(usersController.create);
router.route("/signin").get(usersController.findOne);
router.route("/dashboard").get(usersController.findOne);

//   app.post("/signup", (req, res) => {
//     const today = new Date();
//     const userData = {
//       email: req.body.email,
//       password: req.body.password,
//       created: today
//     };

//     User.findOne({
//       email: req.body.email
//     })
//       .then(user => {
//         if (!user) {
//           bcrypt.hash(req.body.password, 10, (err, hash) => {
//             userData.password = hash;
//             User.create(userData)
//               .then(user => {
//                 res.json({ status: user.email + ` registered!` });
//               })
//               .catch(err => {
//                 res.send("error:" + err);
//               });
//           });
//         } else {
//           res.json({ error: "User already exists" });
//         }
//       })
//       .catch(err => {
//         res.send("error" + err);
//       });
//   });

//   app.post("/signin", (req, res) => {
//     User.findOne({
//       email: req.body.email
//     })
//       .then(user => {
//         if (user) {
//           if (bcrypt.compareSync(req.body.password, user.password)) {
//             const payload = {
//               _id: user._id,
//               email: user.email
//             };
//             let token = jwt.sign(payload, process.env.SECRET_KEY, {
//               expiresIn: 1440
//             });
//             res.send(token);
//           } else {
//             res.json({ error: "User does not exist!" });
//           }
//         } else {
//           res.json({ error: "User does not exist!" });
//         }
//       })
//       .catch(err => {
//         res.send("error: " + err);
//       });
//   });
module.exports = router;
