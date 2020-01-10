const jwt = require("jsonwebtoken");
const secret = require("../secret");

module.exports = (req, res, next) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    console.log(token);
    if (token) {
        jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "The token isn't valid." });
            } else {
                req.jwtToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(400).json({ message: "No token has been provided." });
    }
};
