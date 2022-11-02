import { product } from "./products.js";

const createCard = (title, img, parent) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList = "card";

  const titleDiv = document.createElement("h3");
  titleDiv.classList.add("card-title");
  titleDiv.textContent = title;

  const imgDiv = document.createElement("img");
  imgDiv.setAttribute("src", img);
  imgDiv.setAttribute("alt", "image");

  const btn = document.createElement("button");
  btn.textContent = "Buy";
  btn.classList.add("btn");

  cardDiv.append(titleDiv, imgDiv, btn);
  parent.append(cardDiv);
};

const myBody = document.querySelector("body");
//Create NAVBAR
const createNav = document.createElement("nav");
createNav.classList = "navbar";
const unList = document.createElement("ul");
unList.classList = "icons";
for (let i = 0; i < 2; i++) {
  const listItem = document.createElement("li");
  const listAnchor = document.createElement("a");
  listAnchor.textContent = "loremlorem";
  listAnchor.setAttribute("href", "https://www.logoipsum.com");
  listItem.append(listAnchor);
  unList.appendChild(listItem);
}
const logo = document.createElement("embed");
logo.setAttribute("src", "./logoipsum.svg");

createNav.append(unList, logo);
myBody.append(createNav);
//Create containers
const bestSeller = document.createElement("div");
const bestRated = document.createElement("div");
bestSeller.classList.add("best-seller");
bestRated.classList.add("best-rated");

myBody.append(bestRated, bestSeller);

//create bestRated
const titleRated = document.createElement("h3");
const containerRated = document.createElement("div");
titleRated.classList = "title";
containerRated.classList = "container";
titleRated.textContent = "Best Rated";

bestRated.append(titleRated, containerRated);

//create bestSeller
const titleSeller = document.createElement("h3");
const containerSeller = document.createElement("div");
titleSeller.classList = "title";
containerSeller.classList = "container";
titleSeller.textContent = "Best Seller";
bestSeller.append(titleSeller, containerSeller);

//create footer
const createFooter = document.createElement("footer");
const footerText = document.createElement("h3");
footerText.textContent = "Footer Bellissimo";
createFooter.append(footerText);
myBody.append(createFooter);

//////////
product.forEach((el) => {
  createCard(el.title, el.image, containerSeller);
});

const ratedElements = product
  .filter((el) => el.rating.rate >= 4.0)
  .map((el) => {
    createCard(el.title, el.image, containerRated);
  });
console.log(ratedElements);
