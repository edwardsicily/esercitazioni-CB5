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

export { ce, qs, GET, POST };
