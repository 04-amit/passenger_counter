let saveEl = document.getElementById("sa")
let countEl = document.getElementById("count")

let count = 0;
function increment() {
    count++;
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.innerText = count
}
