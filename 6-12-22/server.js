const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const actorRouter = require("./src/routes/actors.js");
const directorRouter = require("./src/routes/directors.js");
const usersRouter = require("./src/routes/users.js");

app.use(bodyParser.json());
app.use(express.static("public"));

const PORT = 3000;

const htmlRoot = { root: __dirname + "/src/html" };

const middleware = (req, res, next) => {
  console.log("Funziona perf");
  next();
};

app.use("/actors", actorRouter);
app.use("/directors", directorRouter);

mongoose.connect("mongodb://127.0.0.1:27017/Edgemony").then(
  app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
  })
);

// ROUTES
app.get("/home", (req, res) => {
  res.sendFile("home.html", htmlRoot);
});
