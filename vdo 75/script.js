console.log("Suman is a student");
console.log("Suman is an Engineering Student");

setTimeout(() => {
  console.log("This is setTimeOut 1");
}, 2000);

setTimeout(() => {
  console.log("This is setTimeOut 2");
}, 4000);

console.log("The End");

const callback = (arg) => {
  console.log(arg);
};
const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("InnoX");
  document.head.append(sc);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);
