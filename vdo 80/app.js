let obj = {
  a: 1,
  b: "Suman",
};

console.log(obj);

let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; //set rabbits.[[Prototype]] = animal

class Animal {
  constructor(name) {
    this.name = name;
    console.log("object is created ....");
  }
  eats() {
    console.log("eat grass");
  }
  jumps() {
    console.log("jump high");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    console.log("Object is created ....");
  }
  eats() {
    super.eats();
    console.log("Meow Meow Meow");
  }
}
let a = new Animal("rabbit");
console.log(a);

let l = new Lion("Shimba");
console.log(l);
