const fs = require("fs");
const { uuid } = require("uuidv4");
const readData = () => {
  const attori_text = fs.readFileSync("./src/data/actors.json", "utf8");
  return JSON.parse(attori_text);
};

const createActorObj = (body) => {
  const newActor = {
    id: body.id == undefined ? uuid() : parseInt(body.id),
    nome: body.nome,
    cognome: body.cognome,
    data_nascita: body.data_nascita == undefined ? "" : body.data_nascita,
    riconoscimenti: body.riconoscimenti == undefined ? "" : body.riconoscimenti,
    inizio_attivita:
      body.inizio_attivita == undefined ? "" : body.inizio_attivita,
    fine_attivita: body.fine_attivita == undefined ? "" : body.fine_attivita,
    in_attivita: body.in_attivita == undefined ? "" : body.in_attivita,
  };
  return newActor;
};

module.exports = { readData, createActorObj };
