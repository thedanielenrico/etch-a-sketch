const DEFAULT_GRID_SIZE = 16;

const gridContainer = document.getElementById("grid-container");
const clearBtn = document.getElementById("clear-btn");
const rowAmountSlider = document.getElementById("box-range-slider");
const sliderLabel = document.getElementById("slider-label");

let sliderValue = DEFAULT_GRID_SIZE;

rowAmountSlider.addEventListener("input", (e) => {
  clearGrid(Number(e.target.value));
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
              rowBox.style.backgroundColor = "blue";
              rowBox.style.borderColor = "blue";
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

function clearGrid(gridSize) {
  gridContainer.innerHTML = "";
  sliderLabel.innerText = gridSize;
  sliderValue = gridSize;
  createGrid(gridSize);
}
createGrid(DEFAULT_GRID_SIZE);
