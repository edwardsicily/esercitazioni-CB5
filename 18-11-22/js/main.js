import { GET, PATCH, POST } from "./api.js";
import { q, createCard, uuidv4 } from "./utils.js";

const ul = q(".cards__list");
const pokeForm = document.forms.pokemon;
const elements = document.forms.pokemon.elements;

const updateElements = document.forms.upPokemon;
const updateInputElements = document.forms.upPokemon.elements;

const url = "http://localhost:3000/pokemon";

pokeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);

  if (elements.PokeName.value == "" || elements.PokeType.value == "") return;

  const data = {
    id: uuidv4(),
    name: elements.PokeName.value.trim().toLowerCase(),
    type: elements.PokeType.value.trim().toLowerCase(),
  };
  console.log(data);

  POST(url, data).then(() => location.reload());
});

updateElements.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    updateElements[0].value === "" ||
    updateInputElements.upPokeName === "" ||
    updateInputElements.upPokeType === ""
  ) {
    return;
  }

  const id = updateInputElements[0].value;

  const data = {
    name: updateInputElements.upPokeName.value.trim().toLowerCase(),
    type: updateInputElements.upPokeType.value.trim().toLowerCase(),
  };
  PATCH(url, id, data).then(location.reload());
});

window.onload = GET(url).then((res) => {
  res.forEach((pok) => createCard(url, ul, pok));
});
