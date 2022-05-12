//creating variables
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

//change color of "pen"
function changeColor() {
    this.style.backgroundColor = currentColor;
}

//clears the board then adds divs based on what size was current
function clear() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    addDivs(currentNum);
}


//event listeners for the buttons
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

//when the user selects a color on the picker it will change the global var which affects change color func
function colorSelected(element){
    currentColor = element.value;
}


//initiate the board
addDivs(20);