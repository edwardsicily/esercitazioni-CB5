const express = require("express");
const mongoose = require("mongoose");
const { readData, createActorObj } = require("../utils.js");
const fs = require("fs");
const directorRouter = express.Router();

const jsonRoot = {
  actors: __dirname + "./../data/actors.json",
  directors: __dirname + `./../data/directors.json`,
};

//MODEL E SCHEMA
const dirSchema = new mongoose.Schema({
  nome: String,
  cognome: String,
  data_nascita: String,
  riconoscimenti: String,
  inizio_attivita: String,
  fine_attivita: String,
  in_attivita: Boolean,
});

const Director = mongoose.model("Director", dirSchema);
//CHIAMATE HTTP

const getAllDirectors = async (req, res) => {
  try {
    const directors = await Director.find();
    res.status(200).json(directors);
  } catch (err) {
    res.status(404).json({ err: "ERR" });
  }
};
directorRouter.get("/all", getAllDirectors);

/* directorRouter.get("/", (req, res) => {
  const { id } = req.query;
  const directors = readData(jsonRoot.directors);
  const director = directors.find((dir) => dir.id == id);
  if (!director) {
    res.status(404).json({ err: "Not Found" });
    return;
  }
  res.status(200).json(director);
}); */

directorRouter.get("/", (req, res) => {
  res.status(200).send("Richiesta non implementata");
});

const postDirector = async (req, res) => {
  const director = req.body;
  const newDirector = new Director(director);
  try {
    await newDirector.save();
    res.status(201).json(newDirector);
  } catch (err) {
    res.status(409).json({ err: "ERR" });
  }
};
directorRouter.post("/", postDirector);

const putDirector = async (req, res) => {
  const id = req.query.id;
  const body = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "id non conforme" });
  }
  try {
    await Actor.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json({ msg: "regista aggiornato con successo" });
  } catch (err) {
    res.staut(404).json({ err: "ERR" });
  }
};
directorRouter.put("/", putDirector);

const deleteDirector = async (req, res) => {
  const id = req.body.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "id non conforme" });
  }
  try {
    await Director.findByIdAndDelete(id);
    res.status(200).json({ msg: "regista eliminato con successo" });
  } catch {
    res.status(409).json({ err: "ERR" });
  }
};
directorRouter.delete("/", deleteDirector);

module.exports = directorRouter;
