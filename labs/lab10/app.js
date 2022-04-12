//Jack Goodman
//4/12/2022
//n220

//----------In-Class_4/12-------------------------------------------
let allNamesClicked = "";
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
}