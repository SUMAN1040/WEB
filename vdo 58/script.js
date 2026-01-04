function nice(name) {
  console.log("Hey! " + name + " you are nice!!!!!!!");
  console.log("Hey! " + name + " you are good!!!!!!!");
  console.log("Hey! " + name + " your tshirt is nice!!!!!!!");
  console.log("Hey! " + name + " your hair is nice!!!!!!!");
}

nice("Suman");
console.log();

nice("Kumar");
console.log();

function sum(a, b, extra = 3) {
  // console.log(a + b);
  return a + b + extra;
}

let result = sum(5, 10);

console.log("The sum of the function: " + result);
console.log();

const func1 = (x) => {
  console.log("I am an arrow function:", x);
};
func1(5);