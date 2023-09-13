function multiply(num1: number, num2: number) {
  return num1 * num2;
}

function sum(num1: number, num2: number) {
  return num1 + num2;
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

(() => {
  const num1: number = Number(prompt("First Number"));
  const num2: number = Number(prompt("Second Number"));
  if (isNaN(num1) || isNaN(num2)) return alert("Place type a number");
  let result = sum(num1, num2);
  result += multiply(1, 2);
  showResult(result);
})();
