const modal = document.getElementById("modal");
const accessStartButton = document.getElementById("modalStartAccess");
const accessEndButton = document.getElementById("modalEndAccess");

accessStartButton.addEventListener("click", () => {
    modal.style.display = "block";
})
accessEndButton.addEventListener("click", () => {
    modal.style.display = "block";
})

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
