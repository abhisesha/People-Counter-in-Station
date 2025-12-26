let count = 0
let countEL = document.getElementById("count-el")
let saveEL = document.getElementById("string_save")

function increment() {
    count = count + 1
    countEL.innerText = count
}

function save() {
    let newel = count + " - "
    saveEL.textContent += newel
    countEL.innerText = count
    count = 0
}