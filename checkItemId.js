const items = require("../../items/itemsModel");

module.exports = function checkItemId(req, res, next) {
    const id = req.params.id;
    console.log(items);

    items
        .getItemById(id)
        .then(item => {
            if (item) {
                req.item = item;
                next();
            } else {
                res.status(404).json({
                    message: "Item with this ID doesn't exist."
                });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
};
