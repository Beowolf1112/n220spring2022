//Jack Goodman
//4/5/2022
//n220

let exampleDiv = document.getElementById("example");
exampleDiv.addEventListener("click", dothing);

let exampleDiv2 = document.getElementById("example2");
exampleDiv2.addEventListener("click", dothing2);

function dothing() {
    //console.log(event.target); //makes a refrence to the code in console log
    event.target.innerHTML = "DONE"; //changes button text
    //console.log("I've been invoked");
}

function dothing2() {
    event.target.innerHTML = "DONE";
}

var grid = [
    [0, 0, 0,],
    [0, 0, 0],
    [0, 0, 0]
];

