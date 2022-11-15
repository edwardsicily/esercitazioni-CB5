import { c, q, GET, POST, uuidv4 } from "./utils.js";
const queryBtn = q(".btn-form");
const pokeForm = document.forms[0];
const elements = pokeForm.elements;
const list = q(".pokemon-list");
console.log(elements);

const CreateEl = (arr, parent) => {
  const card = c("div");
  const name = c("h3");
  const type = c("h3");

  card.className = "card";
  name.className = "name";
  type.className = "type";

  card.classList.add(`bg-${arr.type}`);
  name.textContent = `Name: ${arr.name}`;
  type.textContent = `Type: ${arr.type}`;

  card.append(name, type);
  parent.append(card);
};

const url = "http://localhost:3000/pokemon";

pokeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (elements.PokeName.value == "" || elements.PokeType.value == "") return;

  const data = {
    id: uuidv4(),
    name: elements.PokeName.value.trim().toLowerCase(),
    type: elements.PokeType.value.trim().toLowerCase(),
  };
  console.log(data);

  POST(url, data)
    .then((res) => res.json())
    .then((res) => console.log("Success: " + res))
    .catch((e) => console.log("Error: " + e));
});

window.onload = GET(url).then((res) => {
  res.forEach((el) => CreateEl(el, list));
});
