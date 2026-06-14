/* =====================================
   START (HTML): mini-project/miniproject.html
   =====================================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Coloring Squares</title>
  <link rel="stylesheet" href="miniproject.css">
</head>
<body>

  <h1>Coloring Squares</h1>

  <div class="controls">

    <label>Select a color:</label>
    <input type="color" id="colorPicker" value="#ff0000">

    <button id="rainbowBtn">Rainbow Mode</button>
    <button id="eraserBtn">Eraser</button>
    <button id="clearBtn">Clear</button>

    <label>Grid Size:</label>
    <input type="range" id="gridSize" min="10" max="60" value="30">
    <span id="gridValue">30 × 30</span>

  </div>

  <div id="grid"></div>

  <script src="miniproject.js"></script>
</body>
</html>
   =====================================
   END (HTML): mini-project/miniproject.html
   ===================================== */


/* =====================================
   START (CSS): mini-project/miniproject.css
   =====================================
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background: #f4f4f4;
}

.controls {
  margin-bottom: 20px;
}

button {
  margin: 0 5px;
  padding: 6px 12px;
  cursor: pointer;
}

#grid {
  margin: 20px auto;
  display: grid;
  gap: 1px;
}

.square {
  width: 20px;
  height: 20px;
  background: white;
  border: 1px solid #ddd;
  cursor: pointer;
}
   =====================================
   END (CSS): mini-project/miniproject.css
   ===================================== */


// =====================================
// START: mini-project/miniproject.js
// =====================================
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

// Generate random rainbow color
function randomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

// Create grid
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

// Paint logic
function paint(square) {
  if (eraserMode) {
    square.style.backgroundColor = "white";
  } else if (rainbowMode) {
    square.style.backgroundColor = randomColor();
  } else {
    square.style.backgroundColor = colorPicker.value;
  }
}

// Stop drawing when mouse is released
document.addEventListener("mouseup", () => {
  isDrawing = false;
});

// Toggle rainbow mode
rainbowBtn.addEventListener("click", () => {
  rainbowMode = !rainbowMode;
  eraserMode = false;

  rainbowBtn.style.background = rainbowMode ? "#ccc" : "";
  eraserBtn.style.background = "";
});

// Toggle eraser mode
eraserBtn.addEventListener("click", () => {
  eraserMode = !eraserMode;
  rainbowMode = false;

  eraserBtn.style.background = eraserMode ? "#ccc" : "";
  rainbowBtn.style.background = "";
});

// Clear board
clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".square").forEach(sq => {
    sq.style.backgroundColor = "white";
  });
});

// Grid size slider
gridSizeSlider.addEventListener("input", () => {
  const size = gridSizeSlider.value;
  gridValue.textContent = `${size} × ${size}`;
  createGrid(size);
});

// Initial grid
createGrid(30);
// =====================================
// END: mini-project/miniproject.js
// =====================================
