import { ce, qs, GET, POST, DELETE, notify, reloadCards } from "./utils.js";
const bodyEl = qs("body");
const form = document.forms.nuovi_attori;
const element = form.elements;
const urlActors = "http://localhost:3000/actors";
const urlNewActor = "http://localhost:3000/actor";
const DelActor = `http://localhost:3000/actor`;
const cardContainer = qs(".card_container");

const createCard = (data, parent) => {
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

  const btnDelete = ce("div");
  btnDelete.className = "btn-delete-card";

  const iconDelete = ce("span");
  iconDelete.className = "material-symbols-outlined";
  iconDelete.textContent = "close";

  btnDelete.append(iconDelete);

  nameEl.textContent = data.nome;
  surnameEl.textContent = data.cognome;
  dateEl.textContent = data.data_nascita;

  btnDelete.addEventListener("click", () => {
    DELETE(DelActor, data.id);
  });

  cardEl.append(imgEl, nameEl, surnameEl, dateEl, btnDelete);
  parent.append(cardEl);
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
      console.log(bodyEl);
      console.log(res);
      notify(res, bodyEl);
    })
    .then(() => {
      reloadCards(cardContainer);
    })
    .catch((err) => {
      console.log("errore", err);
    });
});

window.onload = GET(urlActors).then((res) =>
  res.map((actor) => createCard(actor, cardContainer))
);
