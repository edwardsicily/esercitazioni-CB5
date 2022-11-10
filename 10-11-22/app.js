// Dichiaro le mie variabili
const btn = document.getElementById("btn-generator");
const adviceNum = document.querySelector(".num");
const advice = document.getElementById("advice");

const urlAdvice = "https://api.adviceslip.com/advice";

btn.addEventListener("click", () => {
  getAdvice(urlAdvice);
});

/**
 * Descrizione della funzione
 * @param {string} url
 */
const getAdvice = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      //aggiorno entrambi consiglio e numero consiglio
      adviceNum.textContent = `ADVICE #${res.slip.id}`;
      advice.innerHTML = res.slip.advice;
    })
    .catch((e) => console.log("Error:" + e));
};

getAdvice(urlAdvice);
