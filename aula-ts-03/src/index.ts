function multiply(num1: number, num2: number) {
  return num1 * num2;
}

function sum(num1: number, num2: number) {
  return num1 * num2;
}

function isEven(num: number) {
  return num % 2 === 0;
}

function showResult(result: number) {
  if (isEven(result)) {
    console.log(`The result is ${result} and it's even!`);
  } else {
    console.log(`The result is ${result} and it's odd!`);
  }
}

const result1 = multiply(3, 7);
showResult(result1);
const result2 = sum(6, 5);
showResult(result2);
