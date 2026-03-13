let a = prompt("Enter a number: ");
let b = prompt("Enter second number: ");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Invalid input");
}

let sum = parseInt(a) + parseInt(b);
function main() {
  try {
    console.log("The sum is ", sum * 2);
    return true;
  } catch (error) {
    console.log("Something went wrong");
    return false;
  } finally {
    console.log("Hello finally you this output");
  }
}


let c = main();