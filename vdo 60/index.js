console.log("This is strings tutorial");

let a = "Harry";
console.log(a);
console.log(a[0]);
console.log(a[7]);
console.log(a.length);

let real_name = "Suman";
let friend = "Ram";
console.log(real_name + " is the friend of " + friend);

//template literals
console.log(`${real_name} is the friend of ${friend}`);

let b = "Apple";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1, 4));
console.log(b.replace("pp", "ss"));
console.log(b.concat(" " + a + " Product"));

let f_name = "     Suman";
console.log(f_name.trim());

//Strings are immutable
