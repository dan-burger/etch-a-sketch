//container queryselect
let container = document.querySelector(".container");
let tenBtn = document.querySelector(".tenBtn");
let twentyBtn = document.querySelector(".twentyBtn");
let thirtyBtn = document.querySelector(".thirtyBtn");
let clearBtn = document.querySelector(".clearBtn");
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

function clear() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    addDivs(currentNum);
}



clearBtn.addEventListener("click", clear);
tenBtn.addEventListener("click", () => {
    if (currentNum != 10) {
        currentNum = 10;
        clear()
    }
});

twentyBtn.addEventListener("click", () => {
    if (currentNum != 20) {
        currentNum = 20;
        clear()
    }
});


thirtyBtn.addEventListener("click", () => {
    if (currentNum != 30) {
        currentNum = 30;
        clear();
    }
});

function colorSelected(element){
    currentColor = element.value;
}

addDivs(20);