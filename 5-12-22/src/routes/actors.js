const express = require("express");
const { readData, createActorObj } = require("../utils.js");
const fs = require("fs");

const actorRoutes = express.Router();

const jsonRoot = {
  actors: __dirname + "./../data/actors.json",
  directors: __dirname + "./../data/directors.json",
};

actorRoutes.get("/all", (req, res) => {
  const allActors = readData(jsonRoot.actors);
  res.status(200).json(allActors);
});

actorRoutes.get("/", (req, res) => {
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
});

actorRoutes.post("", (req, res) => {
  //TODO
  if (!req.body.nome || !req.body.cognome) {
    res.status(400).json({ error: "bad request", status: 400 });
    return;
  }
  const newActorObj = createActorObj(req.body);

  const actors = readData(jsonRoot.actors);

  //aggiungo l'attore ricevuto dalla req a ad actor
  actors[actors.length] = newActorObj;
  //console.log(`aggiunto nuovo attore in indice ${actors.length}`);
  fs.writeFileSync(jsonRoot.actors, JSON.stringify(actors));
  res.status(200).json({ res: "Attore Creato", status: 200 });
});

actorRoutes.put("/", (req, res) => {
  if (!req.body.nome || !req.body.cognome) {
    res.status(400).json({ error: "bad request", status: 400 });
    return;
  }

  const newActorObj = createActorObj(req.body);
  const actors = readData(jsonRoot.actors);

  const index = attori.findIndex((actor) => {
    return actor.id === newActorObj.id;
  });

  if (index >= 0) {
    actors.splice(index, 1, newActorObj);
    fs.writeFileSync(jsonRoot.actors, JSON.stringify(actors));
    res.status(200).json({ res: "Attore modificato" });
  } else {
    res.status(200).json({ res: "Attore non trovato" });
  }

  res.send(200).json({ msg: "Attore modificato" });
});

actorRoutes.delete("/", (req, res) => {
  const { id } = req.body;
  if (!id) {
    res.status(400).json({ error: "Bad request" });
    return;
  }
  const actors = readData(jsonRoot.actors);
  const actorToDel = actors.find((actor) => actor.id == id);

  if (!actorToDel) {
    res.status(404).json({ error: "Not found" });
    return;
  }

  const newArr = actors.filter((actor) => {
    return actor.id != id;
  });

  fs.writeFileSync(jsonRoot.actors, JSON.stringify(newArr));

  res.status(200).json({ res: "Actor successfully deleted" });
});

module.exports = actorRoutes;
