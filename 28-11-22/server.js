const express = require("express");
const calc_module = require("./src/calc.js");
const app = express();
app.use(express.static("public"));
const htmlRoot = { root: __dirname + "/src/html" };

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Sto ascoltando alla porta 3000");
});

app.get("/calc", (req, res) => {
  res.sendFile("calcolatrice.html", htmlRoot);
});

app.get("/calcolatrice", function (req, res) {
  console.log(req.query);
  let par1 = req.query.param1;
  let par2 = req.query.param2;
  let par3 = req.query.param3;
  let result;
  switch (par3) {
    case "sum":
      result = calc_module.somma(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "sub":
      result = calc_module.sottrazione(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "mul":
      result = calc_module.moltiplicazione(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "div":
      result = calc_module.divisione(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "mod":
      result = calc_module.modulo(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    default:
      console.log("ensomma");
      res.status(404).json({ risultato: "Not Found" });
  }
});
