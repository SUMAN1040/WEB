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

let first, second, third;

//let's generate the first word
let rand = Math.random();
if (rand < 0.33) {
  first = "Creazy";
} else if (rand < 0.66 && rand >= 0.33) {
  first = "Amazing";
} else {
  first = "Fire";
}

//lets generate the second word
rand = Math.random();
if (rand < 0.33) {
  second = "Engine";
} else if (rand < 0.66 && rand >= 0.33) {
  second = "Foods";
} else {
  second = "Garments";
}

//lets generate the third word
rand = Math.random();
if (rand < 0.33) {
  third = "Bros";
} else if (rand < 0.66 && rand >= 0.33) {
  third = "Limited";
} else {
  third = "Hub";
}

console.log(`${first} ${second} ${third}`);
