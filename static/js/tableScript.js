const addButton = document.getElementById("add");
const cell = ["move", "title", "desc", "startTime", "toTime"];

let idValue = "0";

function rowFunction() {
    // Creates a new row and ads appropriate ID
    let rowElement = document.createElement("tr");
    rowElement.setAttribute("id", idValue);
    document.getElementById("tableBody").appendChild(rowElement);

    // Loops through all cellElements used
    for (let i = 0; i < cell.length; i++) {
        let cellElement = document.createElement("td");

        // If cell 1 or 2 is selected, make cell editable
        if (i === 1 || i === 2) { cellElement.contentEditable = "true"; }
        cellElement.classList.add(cell[i]);
        rowElement.appendChild(cellElement);
    }
}

addButton.addEventListener("click", () => {
    idValue++;
    rowFunction();
})