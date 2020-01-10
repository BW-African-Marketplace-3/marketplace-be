const db = require("../database/dbConfig.js");

module.exports = {
    getAllItems,
    addItem,
    getItemById,
    updateItem,
    deleteItem,
    find,
    getItemsByCategory
};

function getAllItems() {
    return db("items")
        .join("users", "items.user_id", "users.id")
        .select(
            "items.id",
            "items.name",
            "items.description",
            "items.price",
            "items.quantity",
            "items.category",
            "items.user_id",
            "users.username",
            "users.location"
        );
}

// function addItem(item) {
//     return db("items").insert(item, "id");
    
// }

async function addItem(item) {
    const [id] =  await db("items").insert(item, "id");
    return getItemById(id);
    
}

async function add(user) {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
}

function getItemsByCategory(category) {
    return db("items").where({ category });
}

function getItemById(id) {
    return db("items")
        .where("items.id", id)
        .first()
        .join("users", "items.user_id", "users.id")
        .select(
            "items.id",
            "items.name",
            "items.description",
            "items.price",
            "items.quantity",
            "items.category",
            "items.user_id",
            "users.username",
            "users.location"
        );
}

function updateItem(id, changes) {
    return db("items")
        .where({ id })
        .update(changes);
}

function deleteItem(id) {
    return db("items")
        .where({ id })
        .del();
}

function find(category) {
    const query = db("items").select("id", "name", "category");
    if (category === null) {
        return query;
    } else if (category) {
        query.where({ category });
    }
    return query;
}
