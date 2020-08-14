const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require('passport')
const {User} = require("../models")
const {secret} = require("./keys");

const initPassport = app => {
    const opts = {
        secretOrKey:secret,
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
    };
    const verify = (jwt_payload, done) => {
        User.findOne({email:jwt_payload.email})
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    }
    const strategy = new JwtStrategy(opts, verify);
    passport.use(strategy);
    app.use(passport.initialize())
}

const authenticate = () => passport.authenticate("jwt", {session: false})

module.exports = {
    initPassport,
    authenticate
}