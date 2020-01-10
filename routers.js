const authRouter = require("./auth/authRouter");
const usersRouter = require("./users/usersRouter");
const itemsRouter = require("./items/itemsRouter");

module.exports = server => {
    server.use("/auth", authRouter);
    server.use("/users", usersRouter);
    server.use("/items", itemsRouter);
};
