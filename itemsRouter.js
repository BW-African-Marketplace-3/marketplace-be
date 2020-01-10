const router = require("express").Router();

const items = require("./itemsModel");
const restricted = require("../auth/middleware/authenticate-middleware");
const checkContent = require("../auth/middleware/checkContent");
const checkItemId = require("../auth/middleware/checkItemId");

//add Item
router.post("/additem", restricted, checkContent, (req, res) => {
    items
        .addItem(req.body)
        .then(item => {
            res.status(201).json(item);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//Get Items
router.get("/", (req, res) => {
    items
        .getAllItems()
        .then(items => {
            res.status(200).json(items);
        })
        .catch(err => {
            res.status(500).json(err);
            console.log(err);
        });
});

//Get Users Items
router.get("/:id", checkItemId, (req, res) => {
    const id = req.params.id;

    items
        .getItemById(id)
        .then(item => {
            res.status(200).json(item);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//update Users Item
router.put("/:id", restricted, checkItemId, checkContent, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    items
        .updateItem(id, changes)
        .then(updatedItem => {
            res.status(201).json(updatedItem);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//delete users Item
router.delete("/:id", restricted, checkItemId, (req, res) => {
    const id = req.params.id;

    items
        .deleteItem(id)
        .then(deletedItem => {
            res.status(200).json({ message: "Item successfully deleted." });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//get items by category
router.get("/category/:category", (req, res) => {
    const category = req.params.category;

    items
        .getItemsByCategory(category)
        .then(item => {
            res.status(200).json(item);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
