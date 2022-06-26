let previousEntries = document.getElementById("previousEntries");
let peopleCount = document.getElementById("peopleCount");

let count = 0;
const increment = () => {
  count++;
  peopleCount.innerText = count;
};

const save = () => {
  let countStr = count + " - ";
  previousEntries.textContent += countStr;
  count = 0;
  peopleCount.innerText = count;
};
