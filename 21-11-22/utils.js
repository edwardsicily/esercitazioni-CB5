const allowedOp = ["sum", "subtract", "multiply", "divide"];

const validateOperation = (str) => {
  str = str.trim().toLowerCase();
  if (allowedOp.indexOf(str) == -1) return "";
  return str;
};

const checkValidity = (arr) => {
  if (arr.length < 2) return [null];
  return arr.map((num) => {
    const parsed = parseInt(num);
    if (isNaN(parsed)) return 0;
    return parsed;
  });
};
function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b == 0) return null;
  return a / b;
}

export { validateOperation, checkValidity, sum, subtract, multiply, divide };
