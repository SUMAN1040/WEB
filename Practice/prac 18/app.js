let massage = `Hello, World`
console.log(massage)


console.log()

let name1 = "Abhinav";
let greeting = "Hello, " + name1 + "! Welcome to JavaScript.";
console.log(greeting);


console.log()


let name2 = "Abhinav";
let greeting1 = `Hello, ${name2}! Welcome to JavaScript.`;
console.log(greeting);


console.log();


let a = 23;
let b = 34;

console.log(`The addsion of ${a} and ${b} is: ${a + b}`);


console.log();

let massage3 = `This is first line.
This is second line.
This is Third Line`
console.log(massage3);



console.log();


function greet(name12){
    return `Hello,${name12}`;
}

console.log(`${greet("Suman")}, How are you?`);


console.log();


let marks = 90;
console.log(`You have${marks >= 40? " Passed" : "Failed"}`);


console.log();


//Nested Template Literal
let product = "Laptop";
let price = 75000;

let massage21 = `The product is ${product} and the costs is ${price}.
${price > 50000 ? "You can buy it" : "You can't buy  it"}`;
console.log(massage21);


console.log();


let sname = "Auman";
let age = 22;

let html = `
    <div>
        <h2> ${sname}</h2>
        <p>Age: ${age}</p>
    </div>
    `;
console.log(html);