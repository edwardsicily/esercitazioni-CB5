const formEl = document.forms.calcolatrice.elements;
const param1 = formEl.param1;
const param2 = formEl.param2;
const btnEl = document.querySelectorAll(".btn");
const risEl = document.querySelector(".result");

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data));
};

const showData = (data) => {
  risEl.textContent = "Risultato: " + data.risultato;
  console.log(data);
};

console.log(btnEl);
for (let i = 0; i < btnEl.length; i++) {
  btnEl[i].addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = param1.value;
    const par2 = param2.value;
    const par3 = btnEl[i].classList[1];

    let url = `http://localhost:3000/calcolatrice?param1=${par1}&param2=${par2}&param3=${par3}`;

    GET(url);
  });
}
