//Esercizio 1 EVOLUTO IN AVANZATO
function myFunc(sign = "+", ...arg) {
  let result = 0;

  switch (sign) {
    case "+":
      for (num of arg) {
        result += num;
      }
      return result;
    case "-":
      for (let i = 1; i < arg.length; i++) {
        if (i === 1) result = arg[i - 1]; //Assegno a result il valore del primo argomento
        result -= arg[i];
      }
      return result;
    case "*":
      result++;
      for (num of arg) {
        result *= num;
      }
      return result;
    case "/":
      for (let i = 1; i < arg.length; i++) {
        if (i === 1) result = arg[i - 1];
        result = result / arg[i];
      }
      return result;
    case "^":
      for (let i = 1; i < arg.length; i++) {
        if (i === 1) result = arg[i - 1];
        result = Math.pow(result, arg[i]);
      }
      return result;
    case "sqrt":
      for (let i = 1; i < arg.length; i++) {
        if (i === 1) result = arg[i - 1];
        result = Math.pow(result, 1 / arg[i]);
      }
      return result;

    default:
      return "Seleziona un operando valido.";
  }
}
//ESERCIZIO 2
let character = {
  nome: "Goku",
  aka: "Kakarot",
  razza: "Saijan",
  mosse: ["Kamehameha", "Kaioken", "Sfera Genkidama", "Teletrasporto"],
  trasformazioni: ["Normale", "SSJ", "SSJ2", "SSJ3", "Oozaru"],
  trasformazioneAttuale: "Normale",
  transform: function (lvl) {
    if (this.trasformazioneAttuale === lvl) return;
    this.trasformazioneAttuale = lvl;
    console.log(`${this.nome} si è trasformato in ${lvl}!`);
  },
  attack: function (mossa) {
    if (this.mosse.includes(mossa))
      console.log(`${this.nome} esegue ${mossa}!`);
  },
};
