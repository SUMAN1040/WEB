const addItem = async (item) => {
  await randomeDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};

const randomeDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

async function main() {
  let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1];
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, -3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 100);

  let text = [
    "Initializing Hacking",
    "Reaching your files",
    "passwords files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up",
  ];

  for (const item of text) {
    addItem(item);
  }

  await randomeDelay();
  clearInterval(t);
}

main();
