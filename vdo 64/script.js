// Create a business name generator by combining list of adjectives;

/*
Adjectives:
Creazy
Amazing
Fire


Shop Name:
Engine
Foods
Garments


Another Word:
Bros
Limited
Hub
*/

// let first, second, third;

// //let's generate the first word
// let rand = Math.random();
// if (rand < 0.33) {
//   first = "Creazy";
// } else if (rand < 0.66 && rand >= 0.33) {
//   first = "Amazing";
// } else {
//   first = "Fire";
// }

// //lets generate the second word
// rand = Math.random();
// if (rand < 0.33) {
//   second = "Engine";
// } else if (rand < 0.66 && rand >= 0.33) {
//   second = "Foods";
// } else {
//   second = "Garments";
// }

// //lets generate the third word
// rand = Math.random();
// if (rand < 0.33) {
//   third = "Bros";
// } else if (rand < 0.66 && rand >= 0.33) {
//   third = "Limited";
// } else {
//   third = "Hub";
// }

// console.log(`${first} ${second} ${third}`);

// other method
let obj1 = {
  1: "Creazy",
  2: "Amazing",
  3: "Fire",
};
let obj2 = {
  1: "Engine",
  2: "Foods",
  3: "Garments",
};
let obj3 = {
  1: "Bros",
  2: "Limited",
  3: "Hub",
};

var ran1 = Math.floor(Math.random() * 3) + 1;
var ran2 = Math.floor(Math.random() * 3) + 1;
var ran3 = Math.floor(Math.random() * 3) + 1;

console.log(`${obj1[ran1]} ${obj2[ran2]} ${obj3[ran3]}`);
