//Jack Goodman
//3/1/22
//n220

//UI Navigation Highlighter
let newEl = document.createElement("div"); //Element for McDivn's
newEl.innerHTML = "mc";
newEl.style.backgroundColor = "#990000";
newEl.style.width = size;
document.body.appendChild(newEl); //places element onto page
newEl.style,float = "left";

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");

/*function oneRise() {
    let ground = 0;
    let name = 0;
    dvGas.style.width = size * 1.1; //set width to increase 10%
    dvGas.style.height = size * 1.1; //set height to increase 10%
    
    dvOne.innerHTML = "div";
} */
function oneOver() { 
    let mouseX = MouseEvent //trigger change for mouse position
    let numb = "mouseout";
   
     if(mouseX < 100) numb = "mouseover";
    dvOne.innerHTML = numb;
    if(numb = "mouseover") { 
    }
} function oneOut() {
    let mouseX = MouseEvent //trigger change for mouse position
    let numb = "mouseover";
    if(mouseX > 100) numb = "mouseout"; //change color when mouse out
    dvOne.innerHTML = numb;
    if(numb = "mouseout") {
        dvOne.style.backgroundColor = "#0000ff";
    }
}

//Rock, Paper, Scissors (Guard) 
let playerScore = 0;
let computerScore = 0;

let comRock = document.getElementById("comRock");
let comPaper = document.getElementById("comPaper");
let comScissors = document.getElementById("comScissors");
let comGuard = document.getElementById("comGuard");

function rock() {
    
}