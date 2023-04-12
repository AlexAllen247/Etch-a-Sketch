const container = document.querySelector(".container");
let color = "black";

function createGrid(num) {
  for (let i = 0; i < num * num; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

function changeColor(e) {
  if (e.target.classList.contains("square")) {
    const square = e.target;
    const passes = parseInt(square.dataset.passes) || 0;
    if (passes < 10) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const black = Math.floor(passes * 25.5);
      const newColor = `rgb(${r}, ${g}, ${b})`;

      color[0] -= black;
      color[1] -= black;
      color[2] -= black;
      square.style.backgroundColor = newColor;
      square.dataset.passes = passes + 1;
    }
  }
}

function resetColors() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => (square.style.backgroundColor = "white"));
}

function resetGrid() {
  let num = prompt("Enter the number of squares per side (maximum 100):");
  if (num === null) {
    return;
  }
  num = parseInt(num);
  if (isNaN(num) || num <= 15 || num > 100) {
    alert("Invalid input. Please enter a number between 16 and 100.");
    return;
  }
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  createGrid(num);
}

container.addEventListener("mouseover", changeColor);
container.addEventListener("click", resetColors);

createGrid(16);
