// require("dotenv").config({ path: ".env" });
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy
const cookieParser = require("cookie-parser")
const session = require("express-session");
const bcrypt = require("bcrypt")
const bodyParser = require("body-parser");
const User = require("./database/models/User");
const routes = require("./routes");

const PORT = process.env.PORT || 5000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Add routes, both API and view
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/usersdb", {
    useNewUrlParser: true,
    useUnifiedTopology:true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());
app.use(cors({
  origin: "https://localhost:3001",
  credentials:true
}));

app.use(
  session({ secret: "skatey-katie", resave: true, saveUninitialized: true })
);
app.use(cookieParser("skatey-katie"))
app.use(passport.initialize());
app.use(passport.session());
require("./database/config/passport")(passport)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


//Routes
//add "/dashboard"

app.post("/signup", (req, res) => {
  const today = new Date();
  const userData = {
    email: req.body.email,
    password: req.body.password,
    created: today
  };

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + ` registered!` });
            })
            .catch(err => {
              res.send("error:" + err);
            });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch(err => {
      res.send("error" + err);
    });
});

app.post("/signin", (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            email: user.email
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        } else {
          res.json({ error: "User does not exist!" });
        }
      } else {
        res.json({ error: "User does not exist!" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
