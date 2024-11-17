const containerDiv = document.querySelector(".container");


const button = document.querySelector("button");
button.addEventListener("click", () => {
    let size = prompt("Enter the size of the grid (max 100).");
    if (size > 100 || size < 0) {
        alert("Invalid Response!");
        return;
    }
    resetGrid(size);
})

function resetGrid(gridSize = 16) {
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.lastChild);
    }
    for (let i = 0; i < gridSize; i++) {
        const newLine = document.createElement("div");
        newLine.setAttribute("style", "display: flex; flex: 1; width: 100%")
        containerDiv.append(newLine);

        for (let j = 0; j < gridSize; j++) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("style", 
                "flex: 1; aspect-ratio: 1/1;");
            newDiv.addEventListener("mouseenter", (e) => e.target.style["background-color"] = '#' + Math.floor(Math.random()*16777215).toString(16));
            newLine.appendChild(newDiv);
        }
    }
}

resetGrid();