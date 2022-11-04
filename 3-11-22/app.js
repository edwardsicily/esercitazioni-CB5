import { myMock } from "./myMock.js";

const content = document.querySelector(".content");
const contextmenu = document.querySelector(".contextmenu");

content.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  contextmenu.style.left = `${e.clientX}px`;
  contextmenu.style.top = `${e.clientY}px`;
  openMenu();
});

content.addEventListener("click", (e) => {
  if (!contextmenu.matches(":hover")) {
    closeMenu();
  }
});

const openMenu = () => {
  contextmenu.classList.remove("hide");
};
const closeMenu = () => {
  contextmenu.classList.add("hide");
};

const chatsElement = document.querySelector(".chats");

myMock.forEach((elem) => {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const dataEL = document.createElement("div");
  const titleData = document.createElement("h4");
  const paragraphData = document.createElement("p");
  const details = document.createElement("div");
  const time = document.createElement("span");
  const notify = document.createElement("span");

  const randomNum = Math.floor(Math.random() * 21);
  const getRandomImg = `${elem.avatarURL}?${randomNum} `;

  card.classList = "chat-elem";
  image.setAttribute("src", getRandomImg);
  dataEL.classList = "data-element";
  details.classList = "details";
  time.classList = "time";
  notify.classList = "notify";

  titleData.textContent = elem.name;
  paragraphData.textContent = elem.history[elem.history.length - 1].content;
  time.textContent = elem.history[elem.history.length - 1].time;

  details.append(time, notify);
  dataEL.append(titleData, paragraphData);
  card.append(image, dataEL, details);
  chatsElement.append(card);
});

const selectedCard = document.querySelectorAll(".chat-elem");
