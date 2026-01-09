//Write a program to calculate factorial of a number using reduce and for loop

let num = prompt("Enter a number");

let fact = 1;
for (let i = 1; i <= num; i++) {
  fact = fact * i;
}
console.log(fact);