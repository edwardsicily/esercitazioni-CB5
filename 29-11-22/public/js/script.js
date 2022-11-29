import { ce, qs, GET, POST } from "./utils.js";
const form = document.forms.nuovi_attori;
const element = form.elements;
const urlActors = "http://localhost:3000/actors";
const urlNewActor = "http://localhost:3000/actor";
const cardContainer = qs(".card_container");

//creazione della card attori
const createCard = (data) => {
  const cardEl = ce("div");
  cardEl.classList.add("card-attore");

  const imgEl = ce("div");
  imgEl.className = "actor-img";
  imgEl.setAttribute("src", "somewwhere");

  const nameEl = ce("h3");
  nameEl.className = "nome-attore";

  const surnameEl = ce("h3");
  surnameEl.className = "cognome-attore";
  const dateEl = ce("p");
  dateEl.className = "nascita-attore";

  nameEl.textContent = data.nome;
  surnameEl.textContent = data.cognome;
  dateEl.textContent = data.data_nascita;

  cardEl.append(imgEl, nameEl, surnameEl, dateEl);
  cardContainer.append(cardEl);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    nome: element.nome_attore.value,
    cognome: element.cognome_attore.value,
    data_nascita: element.nascita_attore.value,
  };

  POST(urlNewActor, data)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("errore", err);
    });
});

window.onload = GET(urlActors).then((res) =>
  res.map((actor) => createCard(actor))
);
