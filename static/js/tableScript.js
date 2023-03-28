const addButton = document.getElementById("add");
let node = document.getElementById("0");

let idValue = "0";


function rowFunction() {
    const clone = node.cloneNode(true);
    clone.setAttribute("id", idValue);
    document.getElementById("tableBody").appendChild(clone);
}

window.addEventListener("load", () => {
    const clone = modal.cloneNode(true);
    document.getElementById("modalStartAccess").appendChild(clone);
})

addButton.addEventListener("click", () => {
    idValue++;
    rowFunction();
})
