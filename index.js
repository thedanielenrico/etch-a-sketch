const MAX_HEIGHT = 900;

const DEFAULT_GRID_SIZE = 16;
const rowBoxes = [];
const gridContainer = document.getElementById("grid-container");
const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {
  rowBoxes.forEach((box) => {
    box.style.backgroundColor = "initial";
  });
});

Array(DEFAULT_GRID_SIZE)
  .fill(undefined)
  .map(() => {
    const row = document.createElement("div");
    row.className = "row";
    gridContainer.appendChild(row);
    Array(DEFAULT_GRID_SIZE)
      .fill(undefined)
      .map((val, idx) => {
        const rowBox = document.createElement("div");
        rowBox.className = "rowBox";
        rowBox.addEventListener("mouseenter", () => {
          rowBox.style.backgroundColor = "blue";
        });
        rowBoxes.push(rowBox);
        row.appendChild(rowBox);
      });
  });
