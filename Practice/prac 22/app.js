let person = {
  name: "Harry",
  age: 22,
  isStudent: true
};


console.log(person.name);
console.log(person["age"]);


let key = "isStudent";
console.log(person[key]);


person.age = 25
console.log(person.age);

//Add a New Property
person.city = "Delhi"
console.log(person.city);
console.log(person)


//Deleting Properties
delete person.isStudent;
console.log(person);


//Nested Objects
let user = {
  name: "Riya",
  address: {
    city: "Mumbai",
    zip: 400001
  }
};

console.log(user.address.city);


//Objects and Functions
let calculator = {
    add : function(a, b){
        return a + b;
    },
    subtract(a, b){
        return a - b;
    }
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));


let car = {
    brand: "Tata",
    model: "Nano",
    year: 2013
};
for(let key in car){
    console.log(`This ${key} is ${car[key]}`)
};


let car1 = {brand: "Hondai", year: 2015};
console.log(Object.keys(car1));
console.log(Object.values(car1));
console.log(Object.entries(car1));



let userss = [
  { name: "Abhinav", age: 22 },
  { name: "Priya", age: 25 },
  { name: "Rahul", age: 28 }
];

console.log(userss[1].name);