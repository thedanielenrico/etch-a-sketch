const MAX_HEIGHT = 900;

const DEFAULT_GRID_SIZE = 16;
const rowBoxes = [];
const gridContainer = document.getElementById("grid-container");
const clearBtn = document.getElementById("clear-btn");
const rowAmountSlider = document.getElementById("box-range-slider");
const sliderLabel = document.getElementById("slider-label");

rowAmountSlider.addEventListener("input", (e) => {
  gridContainer.innerHTML = "";
  sliderLabel.innerText = e.target.value;
  createGrid(Number(e.target.value));
});

clearBtn.addEventListener("click", () => {
  rowBoxes.forEach((box) => {
    box.style.backgroundColor = "initial";
    box.style.borderColor = "lightblue";
  });
});

function createGrid(gridDimension) {
  Array(gridDimension)
    .fill(undefined)
    .map(() => {
      const row = document.createElement("div");
      row.className = "row";
      gridContainer.appendChild(row);
      Array(gridDimension)
        .fill(undefined)
        .map((val, idx) => {
          const rowBox = document.createElement("div");
          rowBox.className = "rowBox";
          rowBox.addEventListener("mouseenter", () => {
            rowBox.style.backgroundColor = "blue";
            rowBox.style.borderColor = "blue";
          });
          rowBoxes.push(rowBox);
          row.appendChild(rowBox);
        });
    });
}

createGrid(DEFAULT_GRID_SIZE);
