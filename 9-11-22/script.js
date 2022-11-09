const list = document.querySelector(".list");
const loading = document.querySelector(".loading");

const myEvent = (e) => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    console.log("Sei in fondo");
    window.removeEventListener("scroll", myEvent);
    loadData(URLArray, loaded);
  }
};

window.addEventListener("scroll", myEvent);

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

  const div = document.createElement("div");
  const title = document.createElement("h3");
  const image = document.createElement("img");
  const number = document.createElement("div");
  const type = document.createElement("h4");

  title.textContent = obj.name;
  number.textContent = `# ${getId(obj.id)}`;
  type.textContent = "Type: " + typeFunc(obj).toUpperCase();
  //console.log("Type: " + typeFunc(obj).toUpperCase());

  div.classList = "card";
  div.classList.add(`bg-${obj.types[0].type.name}`);

  image.classList = "artwork-img";
  number.classList = "pokemon-number";
  type.classList = "pokemon-type";

  image.setAttribute(
    "src",
    obj.sprites.other["official-artwork"].front_default
  );
  div.append(image, title, number, type);
  list.append(div);
};
let URLArray = [];
//Creo array di url
for (let i = 1; i <= 150; i++) {
  URLArray.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
}
let loaded;
const loadData = (arr, num) => {
  // URLARRAY

  let newArr = [];
  for (let i = num; i < num + 50; i++) {
    newArr.push(arr[i]);
  }
  let req = newArr.map((url) => fetch(url).then((res) => res.json()));
  Promise.all(req)
    .then((res) =>
      res.map((item) => {
        //creo card e rimuovo il loader
        if (!item) {
          console.log("Error: This pokemon does not exists");
          return null;
        }

        createPokemonCard(item);
      })
    )
    .finally(() => {
      loaded = num + 50;
      //console.log(loaded);
      loading.classList.remove("active");
    });
};
//creo array di promise
/* let req = URLArray.map((url) => {
  loading.classList.add("active");
  return fetch(url).then((res) => res.json());
}); */

loadData(URLArray, 0);
