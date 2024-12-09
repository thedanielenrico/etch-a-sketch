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
    box.style.opacity = 1;
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
                console.log("brightness", brightness);
              }
            }
          });
          rowBoxes.push(rowBox);
          row.appendChild(rowBox);
        });
    });
}

createGrid(DEFAULT_GRID_SIZE);
