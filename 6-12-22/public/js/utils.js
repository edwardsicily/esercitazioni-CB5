const ce = (el) => document.createElement(el);

const qs = (el) => document.querySelector(el);

const GET = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const POST = async (url, body) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const DELETE = async (url, id) => {
  return await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
};

const notify = (response, parent) => {
  const container = ce("div");

  if (response.status < 400) {
    container.classList.add("notify-card", "notify-succ");
  } else {
    container.classList.add("notify-card", "notify-err");
  }
  parent.append(container);
};

const reloadCards = (element) => {
  element.textContent = "";
  //cardContainer.removeChild();
  GET("http://localhost:3000/actors/all").then((res) =>
    res.map((actor) => createCard(actor, element))
  );
};

export { ce, qs, GET, POST, DELETE, notify, reloadCards };
