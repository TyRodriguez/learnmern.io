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
// const Pusher = require("pusher");
const routes = require("./routes");
//for jobs page
const axios = require('axios');
const cors = require('cors');


const app = express();

// const pusher = new Pusher({
//   appId: process.env.PUSHER_APP_ID,
//   key: process.env.PUSHER_APP_KEY,
//   secret: process.env.PUSHER_APP_SECRET,
//   cluster: process.env.PUSHER_APP_CLUSTER,
//   useTLS: true
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Add routes, both API and view
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/membersdb", {
    useNewUrlParser: true,
    useUnifiedTopology:true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//middleware
// app.use(logger("dev"));

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
        if (bcrypt.compareSync(req.body.password, user.passwprd)) {
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


// ==========  for jobs page =========

app.get('/jobs', async (req, res) => {
  try {
    let { description = '', full_time, location = '', page = 1 } = req.query;
    description = description ? encodeURIComponent(description) : '';
    location = location ? encodeURIComponent(location) : '';
    full_time = full_time === 'true' ? '&full_time=true' : '';

    if (page) {
      page = parseInt(page);
      page = isNaN(page) ? '' : `&page=${page}`;
    }

    const query = `https://jobs.github.com/positions.json?description=${description}&location=${location}${full_time}${page}`;
    const result = await axios.get(query);
    res.send(result.data);
  } catch (error) {
    res.status(400).send('Error while getting list of jobs.Try again later.');
  }
});


// app.post("/update-editor", (req, res) => {
//   pusher.trigger("editor", "code-update", {
//     ...req.body
//   });

//   res.status(200).send("OK");
// });

// app.set("port", process.env.PORT || 5000);
// const server = app.listen(app.get("port"), () => {
//   console.log(`Express running → PORT ${server.address().port}`);
// });

app.listen(5000,()=>{console.log("server running on port 5000")})
