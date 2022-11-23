import { GET } from "../api.js";
const myForm = document.forms.multForm;
console.log(myForm);
const elements = myForm.elements;
const myBtn = myForm.elements[2];
const result = document.querySelector(".data");

myBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const param1 = parseFloat(elements[0].value);
  const param2 = parseFloat(elements[1].value);

  const query = `http://127.0.0.1:3000/multiplication?param1=${param1}&param2=${param2}`;
  console.log(query);

  GET(query).then((data) => (result.textContent = data.result));
});
