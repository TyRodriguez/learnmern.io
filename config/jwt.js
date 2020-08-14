const jwt = require("jsonwebtoken");
const {secret} = require("./keys");

module.exports = {
    secret,
    sign: payload => jwt.sign(payload, secret, {expiresIn: "1d"})
}