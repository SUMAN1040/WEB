console.log("This is Promise");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No! I am not able to do this task");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Hey! dude, i have completed my task");
    }, 1000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No! I am not able to do 2nd task");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 2");
      resolve("Hey! dude, i have completed 2nd task");
    }, 2000);
  }
});

let p3 = Promise.race([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});
