const express = require("express");
const { readData, createActorObj } = require("../utils.js");
const fs = require("fs");
const directorRouter = express.Router();

const jsonRoot = {
  actors: __dirname + "./../data/actors.json",
  directors: __dirname + `./../data/directors.json`,
};

directorRouter.get("/all", (req, res) => {
  const allDirectors = readData(jsonRoot.directors);
  res.status(200).json(allDirectors);
});

directorRouter.get("/", (req, res) => {
  const { id } = req.query;
  const directors = readData(jsonRoot.directors);
  const director = directors.find((dir) => dir.id == id);
  if (!director) {
    res.status(404).json({ err: "Not Found" });
    return;
  }
  res.status(200).json(director);
});

directorRouter.post("/", (req, res) => {
  if (!req.body.nome || !req.body.cognome) {
    res.status(400).json({ error: "bad request", status: 400 });
    return;
  }
  const newDirectorObj = createActorObj(req.body);

  const directors = readData(jsonRoot.directors);

  directors[directors.length] = newDirectorObj;

  fs.writeFileSync(jsonRoot.directors, JSON.stringify(directors));
  res.status(200).json({ res: "Director created", status: 200 });
});

directorRouter.put("/", (req, res) => {
  //TODO
  if (!req.body.nome || !req.body.cognome) {
    res.status(400).json({
      error: "bad request",
      status: 400,
    });
    return;
  }
  const newDirectorObj = createActorObj(req.body);
  const directors = readData(jsonRoot.directors);
  directors[directors.length] = newDirectorObj;
  fs.writeFileSync(jsonRoot.directors, JSON.stringify(directors));

  res.status(200).json({ msg: "Director successfully updated" });
});

directorRouter.delete("/", (req, res) => {
  const { id } = req.body;

  if (!id) {
    res.status(400).json({ error: "Bad request" });
  }
  const directors = readData(jsonRoot.directors);

  const director = directors.filter((dir) => dir.id == id);

  if (!director) {
    res.status(404).json({ msg: "director not found" });
    return;
  }

  const newArr = directors.filter((dir) => dir.id != id);
  fs.writeFileSync(jsonRoot.directors, JSON.stringify(newArr));
  res.status(200).json({ msg: "director successfully deleted" });
});

module.exports = directorRouter;
