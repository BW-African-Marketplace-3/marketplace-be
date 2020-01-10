const router = require("express").Router();

const items = require("../items/itemsModel");
const Users = require("./usersModel");
const restricted = require("../auth/middleware/authenticate-middleware");
const checkUserId = require("../auth/middleware/checkUserId");
const checkContent = require("../auth/middleware/checkContent");

//add an item to the user
router.post("/:id/items", restricted, checkUserId, checkContent, (req, res) => {
    const item = { ...req.body, user_id: req.params.id };
    items
        .addItem(item)
        .then(item => {
            res.status(201).json(item);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//get all users
router.get("/", restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

//get a user
router.get("/:id", checkUserId, (req, res) => {
    const id = req.params.id;

    Users.findById(id)
        .then(user => {
            const { password, id, ...rest } = user;
            res.status(200).json(rest);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//get a users items
router.get("/:id/items", checkUserId, (req, res) => {
    const id = req.params.id;

    Users.getItemsByUserId(id)
        .then(items => {
            res.status(200).json(items);
            console.log(user, items);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//delete a user by id
router.delete("/:id", restricted, checkUserId, (req, res) => {
    const id = req.params.id;

    Users.deleteUser(id)
        .then(deletedUser => {
            res.status(200).json({ message: "User successfully deleted." });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
