const Users = require("../../users/usersModel");

module.exports = function checkUserId(req, res, next) {
    const id = req.params.id;

    Users.findById(id)
        .then(user => {
            if (user) {
                req.item = user;
                next();
            } else {
                res.status(404).json({
                    message: "The user with this ID doesn't exist."
                });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
};
