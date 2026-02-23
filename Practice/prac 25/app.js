console.dir({
  Name: "Suman",
  RollNo: 1040,
  Branch: "CSE",
});

let el = document.getElementById("hello");
console.log(el);
console.log(el.tagName);

let textNode = el.firstChild;
console.log(textNode.nodeName);
console.log(textNode.nodeValue);

let contact = document.getElementById("box12");
console.log(contact.innerText);
console.log(contact.innerHTML);
console.log(contact.outerHTML);

console.log(contact.textContent);

// box12.hidden = true;

console.log(contact.hasAttribute("id"));

let value = contact.getAttribute("id");
console.log(value);

contact.setAttribute("class", "HeySuman");

contact.removeAttribute("class");

console.log(contact.attributes[0].name);
console.log(contact.attributes[0].value);

let div = document.createElement("div");
div.className = "Alert";
div.id = "Hulu";
div.innerHTML = "<p>Welcome to Google India</p>";
document.body.append(div);

let newItem = document.createElement("li");
newItem.textContent = "Item 3";
// list.append(newItem);

newItem.textContent = "Item 0";
// list.prepend(newItem);

let newDivi = document.createElement("div");
newDivi.className = "newDivi";
newDivi.textContent = "Before List";
// list.before(newDivi);

let afterDiv = document.createElement("div");
afterDiv.textContent = "After List";
list.after(afterDiv);


