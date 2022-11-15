import { q, GET } from "./utils.js";

const spinner = q(".lds-spinner");
const post = q(".post");
const wrapper = q(".wrapper");
const prev = q(".prev");
const next = q(".next");
const top = q(".top");
const title = q(".title");
const id = q(".id");
const body = q(".body");

const URL = "https://jsonplaceholder.typicode.com/posts";
let idx = 1;

prev.addEventListener("click", (e) => {
  newPost(e.target.textContent);
});

next.addEventListener("click", (e) => {
  newPost(e.target.textContent);
});

const newPost = (param) => {
  wrapper.classList.add("display-none");
  spinner.classList.remove("display-none");

  if (!param) {
    param = 1;
  } else {
    param = param.toLowerCase();
  }

  switch (param) {
    case "prev":
      idx--;
      break;
    case "next":
      idx++;
      break;
    default:
      idx = param;
  }

  console.log(`${URL}/${idx}`);
  GET(`${URL}/${idx}`)
    .then((res) => {
      console.log(res);
      title.textContent = res.title;
      id.textContent = res.id;
      body.textContent = res.body;

      console.log(prev);
      if (idx <= 1) {
        prev.disabled = true;
        prev.classList.add("disabled");
      } else {
        prev.disabled = false;
        prev.classList.remove("disabled");
      }

      if (idx >= 10) {
        next.disabled = true;
        next.classList.add("disabled");
      } else {
        next.disabled = false;
        next.classList.remove("disabled");
      }
    })
    .finally(() => {
      spinner.classList.add("display-none");
      wrapper.classList.remove("display-none");
    });
};

window.onload = newPost();
