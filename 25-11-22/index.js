import express from "express";
import path from "path";

const app = express();
app.use(express.static("public")); //rende disponibile la cartella public
const PORT = 3000;
const __dirname = path.resolve();
const htmlRoot = { root: __dirname + "/src/html" };
//SOMMA

function somma(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function sottrazione(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function divisione(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

function moltiplicazione(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

app.get("/", (req, res) => {
  res.sendFile("home.html", htmlRoot);
});

app.get("/somma", (req, res) => {
  const { param1, param2 } = req.query;
  let risultato = somma(param1, param2);
  res.status(200).send("" + risultato);
});
app.get("/pagina_somma", (req, res) => {
  res.sendFile("pagina_somma.html", htmlRoot);
});
//SOTTRAZIONE
app.get("/sottrazione", (req, res) => {
  const { param1, param2 } = req.query;
  let risultato = sottrazione(param1, param2);
  res.status(200).send("" + risultato);
});
app.get("/pagina_sottrazione", (req, res) => {
  res.sendFile("pagina_sottrazione.html", htmlRoot);
});
//MOLTIPLICAZIONE
app.get("/moltiplicazione", (req, res) => {
  const { param1, param2 } = req.query;
  let risultato = moltiplicazione(param1, param2);
  res.status(200).send("" + risultato);
});
app.get("/pagina_moltiplicazione", (req, res) => {
  res.sendFile("pagina_moltiplicazione.html", htmlRoot);
});
//DIVISIONE

app.get("/divisione", (req, res) => {
  const { param1, param2 } = req.query;

  if (param2 == 0) {
    res.status(400).send("Operazione impossibile");
  } else {
    let risultato = divisione(param1, param2);
    res.status(200).send("" + risultato);
  }
});
app.get("/pagina_divisione", (req, res) => {
  res.sendFile("pagina_divisione.html", htmlRoot);
});

app.listen(PORT, () => {
  console.log("Server in esecuzione alla porta 3000");
});
