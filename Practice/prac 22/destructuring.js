//DESTRUCTURING: ARRAY AND OBJECT

// It in javasript is short and elegant way to extract values from arrays and objects, It helps variables. It helps to make your code cleaner and more readable.

let numbers = [10, 20, 30];
let a = numbers[0];
let b = numbers[1];
let c = numbers[2];

console.log(a, b, c); // Output: 10 20 30


let [a1, b1, c1] = numbers;
console.log(a1, b1, c1);



//Array Destructuring
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);


//skiping items
const numbers1 = [1, 2, 3, 4];
const [first, , third] = numbers1;
console.log(first, third);

//Default value
const fruits1 = ["Apple"];
const [first1, second1 = "Orange"] = fruits1;
console.log(first1, second1);

//Swaping variables
let x  = 10;
let y = 20;

[x, y] = [y, x];
console.log(x, y);



console.log();


//Object Destructuring
const person12 = {
    name45: "Joth",
    age: 23,
    city: "Hyderabad"
};
const {name45:sub, age:ag, city:cty} = person12;
console.log(sub)
console.log(ag)
console.log(cty)


console.log();
//default value in object destructuring
const per = {
    theme: "Dark",
};

const {theme, fontSize = 16} = per;
console.log(theme);
console.log(fontSize);



//Nested Objects
const user123 ={
    nam: "Smn",
    age: 23,
    address:{
        city: "Hyderabad",
        country: "India"
    }
};

const {nam, age, address:{city, country}} = user123;
console.log(nam, age, city, country);