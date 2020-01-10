const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../users/usersModel");

const createToken = require("./createToken");

router.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;
    const { department, location } = req.body;
    if (
        (department === "Seller" || department === "Buyer") &&
        (location === "North Africa" ||
            location === "West Africa" ||
            location === "Central Africa" ||
            location === "East Africa" ||
            location === "Southern Africa")
    ) {
        Users.add(user)
            .then(user => {
                const { password, ...rest } = user;
                res.status(201).json(rest);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    } else {
        res.send(`Missing information`);
    }
});

router.post("/login", (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                console.log(`I am:", ${user}, ${createToken}`);
                const token = createToken(user);
                console.log(`My token: ${token}`);

                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token
                });
            } else if (user && user.password === "Testing") {
                const token = generateToken(user);
                console.log(token);

                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token
                });
            } else {
                res.status(401).json({ message: "Invalid Credentials" });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = router;
