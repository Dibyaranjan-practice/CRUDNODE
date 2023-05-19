const express = require("express");
require("dotenv").config();

const { router: userRoutes } = require("./Routes/userRoutes");
const app = express();

app.set("view engiene", "ejs");
app.use("/user", userRoutes);
app.use("/", (req, res, next) => {
  res.end("Home Page");
});
app.listen(process.env.PORT, () => console.log("Server started successfully"));
