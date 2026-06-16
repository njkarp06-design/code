const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const gridSizeSlider = document.getElementById("gridSize");
const gridValue = document.getElementById("gridValue");

let isDrawing = false;
let rainbowMode = false;
let eraserMode = false;

function randomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function createGrid(size) {
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size}, 20px)`;
  grid.style.gridTemplateRows = `repeat(${size}, 20px)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mousedown", () => {
      isDrawing = true;
      paint(square);
    });

    square.addEventListener("mouseover", () => {
      if (isDrawing) paint(square);
    });

    grid.appendChild(square);
  }
}

function paint(square) {
  if (eraserMode) {
    square.style.backgroundColor = "white";
  } else if (rainbowMode) {
    square.style.backgroundColor = randomColor();
  } else {
    square.style.backgroundColor = colorPicker.value;
  }
}

document.addEventListener("mouseup", () => {
  isDrawing = false;
});

rainbowBtn.addEventListener("click", () => {
  rainbowMode = !rainbowMode;
  eraserMode = false;

  rainbowBtn.style.background = rainbowMode ? "#ccc" : "";
  eraserBtn.style.background = "";
});

eraserBtn.addEventListener("click", () => {
  eraserMode = !eraserMode;
  rainbowMode = false;

  eraserBtn.style.background = eraserMode ? "#ccc" : "";
  rainbowBtn.style.background = "";
});

clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".square").forEach(sq => {
    sq.style.backgroundColor = "white";
  });
});

gridSizeSlider.addEventListener("input", () => {
  const size = gridSizeSlider.value;
  gridValue.textContent = `${size} × ${size}`;
  createGrid(size);
});

createGrid(30);