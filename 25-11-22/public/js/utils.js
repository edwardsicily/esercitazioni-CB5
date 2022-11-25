const formElement = document.forms.formEl.elements;
const { btnSum, btnSub, btnMult, btnDiv } = formElement;

console.log(btnDiv, btnSub, btnMult);
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

if (btnSum) {
  btnSum.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
    GET(url);
  });
}

if (btnSub) {
  btnSub.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/sottrazione?param1=${par1}&param2=${par2}`;
    GET(url);
  });
}

if (btnMult) {
  btnMult.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/moltiplicazione?param1=${par1}&param2=${par2}`;
    GET(url);
  });
}

if (btnDiv) {
  btnDiv.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/divisione?param1=${par1}&param2=${par2}`;
    GET(url);
  });
}
