//Jack Goodman
//4/12/2022
//n220

//Check Win
let win = document.getElementById("win");

function winner() {
    //let prize = win.value; //recognises individual letters/numbers
    let prize = win.value.split(" ");
    let newPrize = ""; //resets input

    for(var i=0; i<prize.length; i++) {
        if(prize[i]=="111") { //sets peramiters for win conditions
            console.log("winner");
        } else {
            newPrize += prize[i];
            console.log("not winner");
        }
    }
}

//Bad Word Catcher with Loops
let curse = document.getElementById("curse");

function sailor() {
    let naughty = curse.value.split(" "); //recognises words, not individual letters/numbers
    let newNaughty = "";

    for(var i=0; i<naughty.length; i++) {
        if(naughty[i]=="clear" ||naughty[i]=="water" || naughty[i]=="tires"
        ) {
            console.log("naughty words");
        } else {
            newNaughty += naughty[i];
            console.log("no naughty words");
        }
    }
}

//

//----------In-Class_4/12-------------------------------------------
/*let allNamesClicked = "";
let dvSelectedCharacter = document.getElementById("selectedCharacter");
let elements = document.getElementsByClassName("ex"); //acts as array below
//let elements = [document.getElementById("example"), document.getElementById("example2")]; 

for(let i=0; i<elements.length; i++) { //array for event listing
    elements[i].addEventListener("click", dothing);
}

function dothing(event) {
    //change the display text to show the character name of the element clicked on
    //dvSelectedCharacter.innerHTML = event.target.getAttribute("data-character");

    //Allows the elements of character name to remain on page and appear multiple times without reseting
    allNamesClicked += event.target.dataset.character;
    dvSelectedCharacter.innerHTML = allNamesClicked;
}*/
//-----------------Old HTML-------------------------------------------
/*  <div id="selectedCharacter"></div>
    <button class="ex" data-character="Hulk">buttons</button>
    <button class="ex" data-character="Spiderman">buttons</button>
    <button class="ex" data-character="Miss Marvel">buttons</button>
    <button class="ex" data-character="Iron Man">buttons</button>
    <button class="ex" data-character="Hawkeye">buttons</button>
    <button class="ex" data-character="Jessica Jones">buttons</button> 
*/