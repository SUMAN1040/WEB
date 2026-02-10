//Map Function and Reduce
//The Map Method

var myArray = [1, 2, 3, 4, 5]
var multipliedArray = myArray.map(function(element){
    return element * 2;
});

console.log(multipliedArray)


console.log();

let users = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Bob", age: 35}
]

let names = users.map(user => user.name);
console.log(names);

console.log();
//Filter method
var evenNumbers = myArray.filter(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers);


//Real world example
let user = [
    {name: "Suman", age: 22},
    {name: "John", age: 25},
    {name: "Bob", age: 21}
];

let adults = user.filter(user => user.age >= 18);
console.log(adults);


console.log();

var sum = myArray.reduce(function(acc, cur){
    return acc + cur;
});
console.log(sum);

console.log();

let number = [1, 2, 3, 4, 5, 6, 7, 8];
let result = number.map(num => num * 2)
.filter(num => num > 10)
.reduce((sum, num) => sum + num, 0);
console.log(result);