console.log("Harry")

// let InnoX = document.getElementsByClassName("box")
// console.log(InnoX)

// InnoX[2].style.backgroundColor = "orange"


document.getElementById("unique").style.backgroundColor = "yellow"

// document.querySelector(".box").style.backgroundColor = "blue"
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "blue"
})