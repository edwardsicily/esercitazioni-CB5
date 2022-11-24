const formElement = document.forms.formEl.elements;
const btn = formElement.btnCalc;
const result = document.querySelector(".result");

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showData(data);
    });
};

const showData = (data) => {
  result.textContent = `${data}`;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
  GET(url);
});
