import { somma, sottrazione, divisione, moltiplicazione } from "./calc.js";
import http from "http";
import url from "url";

const pagina_home = "Benvenuto nella mia home";
const pagina_somma =
  "L'html della vostra pagina che fa la somma come definito nell'esercizio";

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(url.parse(req.url, true));
  const params = url.parse(req.url, true).query;
  const my_url = url.parse(req.url, true).pathname;

  let { param1, param2 } = params;
  param1 = parseFloat(param1);
  param2 = parseFloat(param2);
  let status = 200;

  switch (my_url) {
    case "/home":
    case "":
      res.write(pagina_home);
      break;
    case "/sum":
      res.writeHead(status, {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
      });
      res.write(
        JSON.stringify({ result: somma(param1, param2), status: status })
      );
      break;
    case "/subtraction":
      res.writeHead(status, {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
      });
      res.write(
        JSON.stringify({ result: sottrazione(param1, param2), status: status })
      );
      break;
    case "/multiplication":
      res.writeHead(status, {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
      });
      res.write(
        JSON.stringify({
          result: moltiplicazione(param1, param2),
          status: status,
        })
      );

      break;
    case "/division":
      if (param2 === 0) {
        status = 400;
        res.writeHead(status, {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
        });
        res.write(JSON.stringify({ status: status }));
        res.end();
        break;
      }
      res.writeHead(200, {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
      });
      res.write(
        JSON.stringify({ result: divisione(param1, param2), status: status })
      );
      break;
    default:
      res.write(
        "<h1>ERRORE</h1><p>La pagina non esiste torna alla <a href='/home'>home</a></p>"
      );
  }
  res.end();
  /* if(req.url === "/home") {
        res.write("Benvenuto nella mia home");
    } else if (req.url === "/calcolatrice") {
        res.write("Benvenuto nella pagina della mia calcolatrice");
    } else {
        res.end("<h1>ERRORE</h1><p>La pagina non esiste torna alla <a href='/home'>home</a></p>");
    }
    res.end();*/
});

server.listen(PORT, () => {
  console.log(`Server in ascolto alla porta ${PORT}`);
});
