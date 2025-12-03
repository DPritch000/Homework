console.log("Is this thing on?")

const express = require('express');
const app = express();

console.log("How about here")

const userRoutes = require("./server/routes/user");

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));