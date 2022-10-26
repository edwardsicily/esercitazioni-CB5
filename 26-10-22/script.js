let myData = ["Edward", "Catrimi", 22, "Diploma Perito Chimico"];
let DateOfBirth = "30-12-1999";
//rimuovo l'età
let removeAge = (arr) => arr.splice(2, 1);
//removeAge(myData)

//inserisco all'indice relativo all'età la data di nascita
let swapAge = (arr) => arr.splice(2, 1, DateOfBirth);
//swapAge(myData);

//rendo nome e cognome maiuscoli
myData[0] = myData[0].toUpperCase();
myData[1] = myData[1].toUpperCase();

console.log(myData);

let str = "#######";
for (let i = 0; i < 7; i++) {
  console.log(str);
  let arr = str.split("");
  arr.pop();
  str = arr.join("");
}
