//Window Objects
// document.getElementById("Suman").innerHTML = "This is my new Text";

// // window.location.href = "https://www.google.com";

// alert("This is an alert message");
// confirm("Make yourself as a proper person?");
// prompt("Enter your name");

//History Objects

// history.pushState(null, null, "https://www.google.com");
// history.back();

//Naviage

// if (navigator.userAgent.indexOf("Chrome") !== -1) {
//     console.log("The user is using Google Chrome");
// }

// if (!navigator.onLine) {
//     console.log("This device is currently offline");
// }

// console.log(`The user screen width is${screen.width}, and height is ${screen.heigth}`);
// console.log(`The user screen color depth is${screen.colorDepth}`);
// console.log(`The user screen pixel depth is${screen.pixelDepth}`);
// console.log(`The user screen orientation is${screen.orientation.angle}`);
// console.log(`The user screen orientation is${screen.orientation.type}`);
// console.log(`The user screen availabe width is${screen.availWidth}`);
// console.log(`The user screen availabe height is${screen.availHeight}`);

// console.log(navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position);
// }));

// // Screen Object
// console.log(`The screen resolution is ${screen.width}x${screen.height} pixels`);
// console.log(`The screen color depth is ${screen.colorDepth} bits`);
// console.log(`The available screen width is ${screen.availWidth} pixels and the available screen height is ${screen.availHeight} pixels`)

// Document Object
// let elements = document.getElementsByClassName("container");
// for (let i = 0; i < elements.length; i++) {
//     elements[i].innerHTML = "This is my new Text";
// }

// let newDiv = document.createElement("div");
// newDiv.className = "div1";
// document.body.appendChild(newDiv);

// getElementsById()
// let myDiv = document.getElementById("Suman");
// myDiv.innerHTML = "Good Morning";

//getElementsByClassName()
// let elements = document.getElementsByClassName("box");
// for (let i = 0; i < elements.length; i++) {
//   elements[i].innerHTML = "This is created by getElementsByClassName";
// }

//getElementsByTagName()
// let elements = document.getElementsByTagName("p");
// for (let i = 0; i < elements.length; i++) {
//     elements[i].innerHTML = "This is my new text";
// }

//InnerHTML
// let myDiv = document.getElementById("myDiv");
// myDiv.innerHTML = "This is my new text";

//outerHTML
let myDiv = document.getElementById("myDiv");
myDiv.outerHTML = "<div><input type='text' name='myName' value='Enter the name: '/></div>";