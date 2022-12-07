const express = require("express");
const mongoose = require("mongoose");
const { readData, createActorObj } = require("../utils.js");
const fs = require("fs");

const actorRoutes = express.Router();

const jsonRoot = {
  actors: __dirname + "./../data/actors.json",
  directors: __dirname + "./../data/directors.json",
};

// SCHEMA AND MODEL
const actSchema = new mongoose.Schema({
  nome: String,
  cognome: String,
  data_nascita: String,
  riconoscimenti: String,
  inizio_attivita: String,
  fine_attivita: String,
  in_attivita: Boolean,
});

const Actor = mongoose.model("Actor", actSchema);

//CHIAMATE HTTP
const getAllActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.status(200).json(actors);
  } catch (err) {
    res.status(404).json({ err: "ERR" });
  }
};
actorRoutes.get("/all", getAllActors);

/* actorRoutes.get("/", (req, res) => {
  const id = req.query.id;
  if (!id) {
    res.status(400).json({ error: "bad request" });
    return;
  }

  const actors = readData(jsonRoot.actors);
  const actor = actors.find((actor) => actor.id == id);
  if (!actor) {
    res.status(404).json({ error: "not found" });
    return;
  }
  res.status(200).json(actor);
}); */

actorRoutes.get("/", (req, res) => {
  res.status(200).send("Richiesta non implementata");
});

const postActor = async (req, res) => {
  const actor = req.body;
  const newActor = new Actor(actor);
  try {
    await newActor.save();
    res.status(201).json(newActor);
  } catch (err) {
    res.status(409).json({ err: "ERR" });
  }
};

actorRoutes.post("", postActor);

const putActor = async (req, res) => {
  const id = req.query.id;
  const body = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "id non conforme" });
  }
  try {
    await Actor.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json({ msg: "attore aggiornato con successo" });
  } catch (err) {
    res.staut(404).json({ err: "ERR" });
  }
};
actorRoutes.put("/", putActor);

const deleteActor = async (req, res) => {
  const id = req.body.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "id non conforme" });
  }
  try {
    await Actor.findByIdAndDelete(id);
    res.status(200).json({ msg: "attore eliminato con successo" });
  } catch {
    res.status(409).json({ err: "ERR" });
  }
};
actorRoutes.delete("/", deleteActor);

module.exports = actorRoutes;
