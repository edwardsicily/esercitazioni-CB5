let firstNumber = prompt("Enter a number");
firstNumber = parseInt(firstNumber);
console.log(firstNumber);

let operation = prompt(
  "Choose an operation, 1. sum 2.subtraction 3.product 4.division"
);
console.log(operation);

let secondNumber = prompt("Enter a number");
secondNumber = parseInt(secondNumber);
console.log(secondNumber);

switch (operation) {
  case "1":
    console.log(
      `The sum of ${firstNumber} and ${secondNumber} is equal to ${
        firstNumber + secondNumber
      }`
    );
    break;
  case "2":
    console.log(
      `The subtraction of ${firstNumber} and ${secondNumber} is equal to ${
        firstNumber - secondNumber
      }`
    );
    break;
  case "3":
    console.log(
      `The product of ${firstNumber} and ${secondNumber} is equal to ${
        firstNumber * secondNumber
      }`
    );
    break;
  case "4":
    console.log(
      `The division of ${firstNumber} and ${secondNumber} is equal to ${
        firstNumber / secondNumber
      }`
    );
    break;
  default:
    console.log("You missed something! Please try again");
}
