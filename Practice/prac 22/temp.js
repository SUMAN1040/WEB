function showThis(){
    console.log(this);
};
showThis();



console.log();



const users = [
  { name: "Abhinav", age: 22 },
  { name: "Riya", age: 21 }
];

const [firstUser, secondUser] = users;
console.log(firstUser.name);  // Abhinav
console.log(secondUser.age);  // 21

// Or directly destructure the object properties
const [{ name: user1Name }, { name: user2Name }] = users;
console.log(user1Name, user2Name); // Abhinav Riya



console.log();



function displayUser({name, age}){
    console.log(`Name: ${name}, Age: ${age}`);
}

const user12 = {name: 'Suman', age: 21};
 displayUser(user12)


console.log();


function greet({name = "Guest"}){
    console.log(`Hello ${name}`)
}

greet({name: 'Suman'});
greet({});



//Destructuring with the Rest Operator

const [first, ...rest] = [10, 20, 30, 40];
console.log(first); 
console.log(rest); 



const { name22, ...details } = { name22: "Abhinav", age: 22, city: "Delhi", sex: "Male", state: "Telangana", country: "India" };
console.log(name22);    
console.log(details); 