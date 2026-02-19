console.log("My js file is working fine")

//List of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent

let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "Hey after click in this button this text is changing"
})

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "Hey after double click in this button this text is changing"
})

button.addEventListener("contextmenu", ()=>{
    alert("Right click is not allowed")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})