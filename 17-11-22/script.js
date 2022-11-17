import { qs, ce, GET } from "./utils.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const cardList = qs(".cardList");
const inputEl = qs(".search-input");
let inputValue = "";
let productsList = [];

const createCardEl = (data, parent) => {
  const { thumbnailUrl, title, url } = data;

  // const elements = {
  //   cardEl: ce("div"),
  //   imgEl: ce("img"),
  //   titleEl: ce("h4"),
  //   urlEl: ce("p")
  // }
  const cardEl = ce("div");
  const imgEl = ce("img");
  const titleEl = ce("h4");
  const urlEl = ce("span");

  cardEl.className = "card";

  imgEl.className = "card__img";
  imgEl.setAttribute("src", thumbnailUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  titleEl.className = "card__title";
  urlEl.className = "card__text";
  urlEl.textContent = url;

  cardEl.append(imgEl, titleEl, urlEl);
  parent.append(cardEl);
};

// decidiamo se mostrare l'elemento o meno
const renderCards = (arr, param) => {
  arr.forEach((el) => {
    if (el.innerText.includes(param)) {
      el.classList.remove("is-hidden");
    } else {
      el.classList.add("is-hidden");
    }
  });
};

GET(BASE_URL).then((data) => {
  productsList = data.filter((product) => product.id <= 10);
  console.log(productsList);
  productsList.forEach((el) => createCardEl(el, cardList)); // Mostriamo tutti i nostri elementi

  // const filteredByInput = justTenProd.filter((product) =>
  //   product.title.includes(inputValue)
  // );
  // filteredByInput.map((product) => createCardEl(product, cardList));
});

inputEl.addEventListener("input", (e) => {
  let ourArr = cardList.childNodes;
  if (e.target.value.length < 3) {
    ourArr.forEach((el) => {
      el.classList.remove("is-hidden");
    });
    return;
  }
  inputValue = "";
  inputValue += e.target.value;

  /*  productsList.map((prod) => {
    if (prod.title.includes(inputValue)) {
      createCardEl(prod, true, cardList);
    } else {
      createCardEl(prod, false, cardList);
    }
  }); */

  //   productsList.filter((prod) => prod.title.includes(inputValue));

  renderCards(ourArr, inputValue);
});
