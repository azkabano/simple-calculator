#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter Second number", type: "number", name: "SecondNumber" },
  {
    message: "Sclect one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);

console.log(answer);
//conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.SecondNumber);
} else if (answer.operator === "Substraction") {
  console.log(answer.firstNumber - answer.SecondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.SecondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.SecondNumber);
} else {
  console.log("Please select valid operator");
}
