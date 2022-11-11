const prevButtn = document.querySelector(".prev");
const nextButtn = document.querySelector(".next");
const spinner = document.querySelector(".lds-ripple");
const list = document.querySelector("#cards");
const title = document.createElement("h3");
const image = document.createElement("img");
const number = document.createElement("div");
const type = document.createElement("h4");

let pageNum = 1;
nextButtn.addEventListener("click", () => {
  if (pageNum === 10) return;
  pageNum++;
  console.log(pageNum);
  GET(pageNum);
});

prevButtn.addEventListener("click", () => {
  if (pageNum === 1) return;
  pageNum--;
  console.log(pageNum);
  GET(pageNum);
});
//Usando then
const GET = (index) => {
  list.style = "display: none";
  spinner.classList.toggle("active");
  fetch(`https://pokeapi.co/api/v2/pokemon/${index}`).then((data) =>
    data.json().then((res) => {
      spinner.classList.toggle("active");
      list.style = "display: flex";
      createPokemonCard(res);
    })
  );
};
//Usando Async / Await
/* const GET = async (index) => {
  spinner.classList.toggle("active");
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
  let data = await response.json();
  spinner.classList.toggle("active");
  createPokemonCard(data);
  console.log(data);
}; */

const createPokemonCard = (obj) => {
  const typeFunc = (poke) => {
    const pokeType = poke.types.map((el) => el.type.name);
    return `${pokeType.join(" ")}`;
  };

  const getId = (n) => {
    if (!n) return null;

    let id = n;
    if (id < 10) {
      id = "00" + id;
    } else if (id < 100) {
      id = "0" + id;
    }
    return id;
  };

  title.textContent = obj.name;
  number.textContent = `# ${getId(obj.id)}`;
  type.textContent = "Type: " + typeFunc(obj).toUpperCase();

  list.classList = `bg-${obj.types[0].type.name}`;

  image.classList = "artwork-img";
  number.classList = "pokemon-number";
  type.classList = "pokemon-type";

  image.setAttribute(
    "src",
    obj.sprites.other["official-artwork"].front_default
  );
  list.append(image, title, number, type);
};

GET(pageNum);
