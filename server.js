const express = require("express");

const configureRouters = require("./routers");

const server = express();
server.use(express.json());
configureRouters(server);

server.get("/", (req, res) => {
    res.send("Welcome to the African Marketplace!");
});

module.exports = server;
