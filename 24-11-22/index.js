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

app.get("/somma", (req, res) => {
  const { param1, param2 } = req.query;
  let risultato = somma(param1, param2);
  console.log("aa");
  res.status(200).send("" + risultato);
});
app.get("/pagina_somma", (req, res) => {
  res.sendFile("pagina_somma.html", htmlRoot);
});
//SOTTRAZIONE
app.get("/pagina_sottrazione", (req, res) => {
  res.sendFile("pagina_sottrazione", htmlRoot);
});
//MOLTIPLICAZIONE
app.get("/pagina_moltiplicazione", (req, res) => {
  res.sendFile("pagina_moltiplicazione", htmlRoot);
});
//DIVISIONE
app.get("/pagina_divisione", (req, res) => {
  res.sendFile("pagina_divisione", htmlRoot);
});

app.listen(PORT, () => {
  console.log("Server in esecuzione alla porta 3000");
});
