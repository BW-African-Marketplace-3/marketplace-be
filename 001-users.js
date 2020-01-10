const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
    return knex("users").insert([
        {
            username: "Kia",
            password: bcrypt.hashSync("1234", 8),
            department: "Buyer",
            location: "North Africa"
        },
        {
            username: "Sorento",
            password: bcrypt.hashSync("1234", 8),
            department: "Buyer",
            location: "East Africa"
        },
        {
            username: "Rio",
            password: bcrypt.hashSync("6789", 8),
            department: "Seller",
            location: "North Africa"
        },
        {
            username: "Sportage",
            password: bcrypt.hashSync("0123", 8),
            department: "Seller",
            location: "East Africa"
        },
        {
            username: "Niro",
            password: bcrypt.hashSync("4567", 8),
            department: "Seller",
            location: "North Africa"
        }
    ]);
};
