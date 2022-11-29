const express = require("express");
const { readData, createActorObj } = require("./src/utils.js");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static("public"));

const htmlRoot = { root: __dirname + "/src/html" };
const jsonRoot = { root: __dirname + "/src/data" };

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server runng at ${PORT}`);
});

app.get("/home", (req, res) => {
  res.sendFile("home.html", htmlRoot);
});

app.get("/actors", (req, res) => {
  const allActors = readData();
  res.status(200).json(allActors);
});

app.get("/actor", (req, res) => {
  const id = req.query.id;
  if (isNaN(id) || id < 0) {
    res.status(400).json({ error: "bad request" });
    return;
  }
  const actors = readData();
  const actor = actors.find((actor) => actor.id == id);
  if (!actor) {
    res.status(404).json({ error: "not found" });
    return;
  }
  res.status(200).json(actor);
});

app.post("/actor", (req, res) => {
  console.log(req.body);

  if (!req.body.nome || !req.body.cognome) {
    res.status(400).json({ error: "bad request" });
    return;
  }
  const newActorObj = createActorObj(req.body);
  console.log(newActorObj);
  const actors = readData();
  console.log({ length: actors.length });
  //aggiungo l'attore ricevuto dalla req a ad actor
  actors[actors.length] = newActorObj;
  console.log(`aggiunto nuovo attore in indice ${actors.length}`);
  fs.writeFileSync("./src/data/actors.json", JSON.stringify(actors));
  res.status(200).json({ res: "Attore Creato" });
});
