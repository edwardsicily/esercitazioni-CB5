import { DELETE, PATCH } from "./api.js";

const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);

// API
/**
 * Create an unique hash code
 * @returns string
 */
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

const createCard = (url, parent, pok) => {
  const wrapperEl = c("li");
  const cardEl = c("div");
  const nameEl = c("p");
  const typeEl = c("p");
  const btns = c("div");
  const delbtn = c("button");
  const upbtn = c("button");

  wrapperEl.className = "list__card";
  cardEl.className = "card__content";
  cardEl.classList.add(`bg-${pok.type}`);
  btns.className = "btns-list";

  nameEl.textContent = pok.name;
  typeEl.textContent = pok.type;
  delbtn.textContent = "delete";
  upbtn.textContent = "update";
  delbtn.classList = "del-btn material-symbols-outlined";
  upbtn.classList = "up-btn material-symbols-outlined";

  delbtn.addEventListener("click", () => {
    DELETE(url, pok.id).then(() => location.reload());
  });

  upbtn.addEventListener("click", () => {
    const upPokemon = document.forms.updatepokemon;
    const upelements = upPokemon.elements;

    console.log(upelements);
    upelements.pokeId.value = pok.id;
    upelements["up-pName"].value = pok.name;
    upelements["up-pType"].value = pok.type;
  });
  btns.append(upbtn, delbtn);
  cardEl.append(nameEl, typeEl, btns);
  wrapperEl.append(cardEl);
  parent.appendChild(wrapperEl);
};

export { c, q, uuidv4, createCard };
