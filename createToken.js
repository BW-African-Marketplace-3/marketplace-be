const jwt = require("jsonwebtoken");
const secret = require("./secret");

module.exports = function createToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department,
        location: user.location
    };

    console.log(`My mistake: ${secret.jwtSecret}`);
    const options = {
        expiresIn: "8h"
    };
    return jwt.sign(payload, secret.jwtSecret, options);
};
