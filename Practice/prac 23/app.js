//Working With JSON
const json = {
  name: "Suman",
  age: 22,
  isStudent: true,
};

const jsonString = JSON.stringify(json);
console.log(jsonString);

localStorage.setItem("json", JSON.stringify(json));


const jsonString1 = '{"name":"Harry","age":22,"city":"Delhi"}';
const user = JSON.parse(jsonString1);

console.log(user.name); // Output: Harry
console.log(user.age);  // Output: 22



const storedUser = localStorage.getItem("json");
const user1 = JSON.parse(storedUser);

console.log(user1.name);


const user2 = { name: "Harry", age: 22, city: "Delhi" };

const prettyJSON = JSON.stringify(user2, null, 2);

console.log(prettyJSON);


fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json()) // parse JSON string into JS object
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));