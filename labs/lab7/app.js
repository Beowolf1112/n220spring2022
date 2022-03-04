//Jack Goodman
//3/1/22
//n220

//UI Navigation Highlighter
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");

function over() { //Over & Out
    let mouseX = MouseEvent //trigger change for mouse position
    let numb = "mouseout";
   
     if(mouseX < 100) numb = "mouseover";
    dvOne.innerHTML = numb;
    if(numb = "mouseover") { 
    }
} function out() {
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