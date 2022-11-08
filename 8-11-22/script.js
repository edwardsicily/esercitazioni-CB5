const list = document.querySelector(".list");

const createPokemonCard = (obj) => {
  console.log(obj.order)

  const typeFunc = (poke) => {
    const pokeType = poke.types.map(el => el.type.name)
    return `${pokeType.join(' ')}`
  }

  const cardColor = (type) => {
    switch (type) {
      case 'electric': 
        return '#FCF7DE'
      case 'water': 
        return '#DEF3FD'
      case 'ground':
        return  '#f4e7da'
      case  'rock':
        return '#d5d5d4'
      case  'fairy':
        return '#fceaff'
      case 'poison':
        return '#98d7a5'
      case 'bug':
        return '#f8d5a3'
      case 'dragon':
        return '#97b3e6'
      case 'psychic':
        return '#eaeda1'
      case  'flying':
        return '#F5F5F5'
      case  'fighting':
        return '#E6E0D4'
      case 'normal':
        return '#F5F5F5'
      case 'fire':
        return '#FDDFDF'
      case 'grass':
        return '#DEFDE0'
      case 'ghost':
        return '#705898'
      case  'ice':
        return '#98d8d8'
      default: 
        return 'gray'
    }
  }

  const div = document.createElement("div");
  const title = document.createElement("h3");
  const image = document.createElement("img");
  const number = document.createElement("div");
  const type = document.createElement("h4");
 
  title.textContent = obj.name;
  number.textContent = `# ${obj.order}`
  type.textContent = 'Type: ' + typeFunc(obj).toUpperCase()
  console.log('Type: ' + typeFunc(obj).toUpperCase())

  div.classList = "card";
  div.style.background = cardColor(obj.types[0].type.name)
  image.classList = "artwork-img";
  number.classList = 'pokemon-number';
  type.classList = 'pokemon-type';

  image.setAttribute("src", obj.sprites.other['official-artwork'].front_default);
  div.append(image, title, number, type);
  list.append(div);
};

fetch("https://pokeapi.co/api/v2/pokemon?limit=150").then((res) =>
  res.json().then((res) => res.results.forEach((pok) => fetchData(pok.url))).catch(e => console.log('error: ' + e))
);

const fetchData = (obj) => {
  fetch(obj)
    .then((res) => res.json())
    .then((res) => createPokemonCard(res))
    .catch(e => console.log('error: ' + e));
};
