import { GET, POST } from "./api.js";
import { q, createCard, uuidv4 } from "./utils.js";

const ul = q(".cards__list");
const pokeForm = document.forms.pokemon;
const elements = pokeForm.elements;
console.log(elements);

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

  POST(url, data).then(() => location.reload());
});

window.onload = GET(url).then((res) => {
  res.forEach((pok) => createCard(url, ul, pok));
});
