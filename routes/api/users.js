const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("../../config/jwt");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const { User } = require("../../models");
const {authenticate} = require("../../config/passport")

router.post("/signup", (req, res) => {
  console.log("signing up.... ", req.body)
  const { errors, isValid } = validateRegisterInput(req.body);
  console.log(errors, isValid)
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password
      });
      
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const jwtPayload = {email: user.email};

              res.json({user, token:jwt.sign(jwtPayload)})})
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/signin", (req, res) => {
  console.log("signing in.... ", req.body)
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name
        };

        jwt.sign(
          payload
        );
        res.redirect("/members");
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.get("/user_data", authenticate(), (req,res)=>{
  const { user } = req;
  res.status(200).send({ user });
})

router.get("/members", authenticate(), (req, res) => {
    User.findById(req.user.id).select("-password")
  });


module.exports = router;
