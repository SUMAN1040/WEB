let greeting = "Hello World";
let name2 = 'Abhinav';
let message = `Welcome, ${name2}!`;

console.log(greeting,"\n",name2,"\n",message);



//Length of the string
let str = "Hello World";
console.log(str.length);


//Commonly Used String Methods
//concat()
let srt1 = "Suman";
let str2 = "Dey";
console.log(srt1.concat(str2));

//indexOf()
let txt = "Hello-World";
console.log(txt.indexOf("World"));

//slice()
let s = "Hello World";
console.log(s.slice(6));
console.log(s.slice(1, 3));


//replace()
let sentence = "Hello World";
console.log(sentence.replace("Hello", "Nee-Hoow"));

//replace using g flag
let fruit = "apple apple apple"
console.log(fruit.replace(/apple/g, "Orange"))


//toUpperCase() & toLowerCase()
let text = "Suman"
console.log(text.toUpperCase());
console.log(text.toLowerCase());


//trim()
let text2 = "   Human   "
console.log(text2.trim());

//split()
let text3 = "Suman, Dey, 2004"
console.log(text3.split(","));