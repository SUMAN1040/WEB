let random = Math.random();

let a = prompt("Enter first number: ");
let c = prompt("Enter operator: ");
let b = prompt("Enter second number: ");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  console.log(`The result is ${a} ${c} ${b}`);
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

else {
  c = obj[c];
  alert(`The result is ${eval(`$a ${c} $b`)}`);
}

//Using another method

// let ope = prompt("Enter operator(either + or - or * or /): ");

// let number1 = prompt("Enter first number: ");
// let number2 = prompt("Enter second number: ");

// let r = Math.random();
// console.log("This is random number", r);

// let result;
// if (r < 0.1 && ope == `+`) {
//   result = number1 - number2;
// } else if (r < 0.1 && ope == `*`) {
//   result = number1 + number2;
// } else if (r < 0.1 && ope == `-`) {
//   result = number1 / number2;
// } else if (r < 0.1 && ope == `/`) {
//   result = number1 ** number2;
// }

// console.log(result);