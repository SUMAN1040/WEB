let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);

//Arrays are mutable
arr[0] = 10;
console.log(arr);
console.log(typeof arr);
console.log(arr.toString());
console.log(arr.join(" and "));
a = [1, 2, 3, 4, 5, 6];
a.pop();
console.log(a);

a.push(100);
console.log(a);

//shift pop ki bhai hoti hain && unshift push ki bhai hoti hain
a.push("Suman");
console.log(a);

a.shift();
console.log(a);

a.unshift("hulu lulu");
console.log(a);

delete a[3];
console.log(a);

console.log(a[3]);

a1 = [1, 2, 3];
a2 = [4, 5, 6];
a3 = [9, 8, 9];
//This not change existing arrays, jsut create a new arrays
console.log(a1.concat(a2, a3));

a4 = [1, 3, 5, 2, 4];
console.log(a4.sort());

let number = [1, 2, 3, 4, 5];
console.log(number.splice(1, 2, 100, 200));
console.log(number);
