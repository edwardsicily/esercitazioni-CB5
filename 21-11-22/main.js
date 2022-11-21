"use strict";
import {
  validateOperation,
  checkValidity,
  sum,
  subtract,
  multiply,
  divide,
} from "./utils.js";

const myArgv = process.argv.slice(2);

let res;

const validated = checkValidity(myArgv.slice(1));

let validatedOp = validateOperation(myArgv[0]);

if (validated[0] == null) validatedOp = "";

switch (validatedOp) {
  case "sum":
    res = sum(validated[0], validated[1]);
    break;
  case "subtract":
    res = subtract(validated[0], validated[1]);
    break;
  case "divide":
    {
      res = divide(validated[0], validated[1]);
      if (!res) res = `Impossible to divide by this value`;
    }
    break;
  case "multiply":
    res = multiply(validated[0], validated[1]);
    break;
  default:
    res = "something went wrong, check the syntax";
}

console.log("Result: " + res);
