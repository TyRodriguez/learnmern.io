
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
//for jobs page
const axios = require('axios');
const cors = require('cors');


const PORT = process.env.PORT || 5000;
const app = express();


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


//Routes
app.use(routes);

//db
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/usersdb", {
    useNewUrlParser: true,
    useUnifiedTopology:true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});