const DEFAULT_GRID_SIZE = 16;

const gridContainer = document.getElementById("grid-container");
const clearBtn = document.getElementById("clear-btn");
const rowAmountSlider = document.getElementById("box-range-slider");
const sliderLabel = document.getElementById("slider-label");
const colorPicker = document.getElementById("user-color");

let sliderValue = DEFAULT_GRID_SIZE;

let boxColor = "blue";

colorPicker.addEventListener("input", (e) => {
  boxColor = e.target.value;
});

rowAmountSlider.addEventListener("mouseup", (e) => {
  clearGrid(Number(e.target.value));
});
rowAmountSlider.addEventListener("input", (e) => {
  updateGridSizeLabel(Number(e.target.value));
});

clearBtn.addEventListener("click", () => {
  clearGrid(sliderValue);
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
        .map(() => {
          let brightness = 1.1;
          const rowBox = document.createElement("div");
          rowBox.className = "rowBox";
          rowBox.addEventListener("mouseenter", (e) => {
            if (!e.metaKey) {
              rowBox.style.backgroundColor = boxColor;
              rowBox.style.borderColor = boxColor;
              if (brightness > 0) {
                rowBox.style.filter = `brightness(${
                  Math.floor((brightness - 0.1) * 10) / 10
                })`;
                brightness = Math.floor((brightness - 0.1) * 10) / 10;
              }
            }
          });

          row.appendChild(rowBox);
        });
    });
}

function updateGridSizeLabel(gridSize) {
  sliderLabel.innerText = gridSize;
  sliderValue = gridSize;
}

function clearGrid(gridSize) {
  gridContainer.innerHTML = "";
  sliderLabel.innerText = gridSize;
  sliderValue = gridSize;
  createGrid(gridSize);
}
createGrid(DEFAULT_GRID_SIZE);
