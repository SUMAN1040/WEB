var currentDate = new Date();
console.log(currentDate);

console.log();

var date = new Date();
date.setDate(20);
date.setFullYear(2025);
console.log(date);

console.log();

var date = new Date();
console.log(date.toLocaleString());
console.log(date.toLocaleString('en-US', {timeZone: 'UTC'}));

console.log();

console.log(Math.random());
// console.log(Math.floor(3.8));
// console.log(Math.cell(3.2));

console.log();

console.log(Math.max(3, 4, 5));
console.log(Math.min(3, 4, 5))


console.log();

console.log(Math.PI);
console.log(Math.E);