//container queryselect
let container = document.querySelector(".container");
let currentNum = 20;
let currentColor = "black";

//creates the grid based on certain number needed
function addDivs(numberOfDivs) {
    let size = 600 / numberOfDivs;
    container.style["grid-template-columns"] = "repeat(" + numberOfDivs + "," + size + "px)";

    for (let i = 0; i < numberOfDivs; i++) {
        for (let j = 0; j < numberOfDivs; j++) {
            let div = document.createElement("div");
            div.classList.add("grid");
            div.style.background = "white";
            div.style.border = "1px solid black"
            container.appendChild(div);
        }
    }

    //sets mouseover event listner
    let cells = document.querySelectorAll(".grid");
    cells.forEach(cell => cell.addEventListener("mouseover", changeColor));

}

//change color
function changeColor() {
    this.style.backgroundColor = currentColor;
}



addDivs(20);