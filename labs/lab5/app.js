//Jack Goodman
//2/17/2022
//n220


let dvGas = document.getElementById("gas"); //element for Peak Pixels
let size = 100;
console.log(dvGas);

let newEl = document.createElement("div"); //Element for McDivn's
newEl.innerHTML = "mc";
newEl.style.backgroundColor = "#990000";
newEl.style.width = size;
document.body.appendChild(newEl); //places element onto page
newEl.style,float = "left";


dvGas.style.width = size + "px" //set width to increase 10%
dvGas.style.height = size + "px" //set height
dvGas.style.backgroundColor = "#326500";

function rise() {
    let ground = 0;
    let name = 0;
    dvGas.style.width = size * 1.1; //set width to increase 10%
    dvGas.style.height = size * 1.1; //set height to increase 10%
    
    console.log(rise);
    dvGas.innerHTML = "div";
}

function over() { //Over & Out
    let mouseX = MouseEvent //trigger change for mouse position
    let side = "mouseout";
   
     if(mouseX < 100) side = "mouseover";
    dvGas.innerHTML = side;
    if(side = "mouseover") { //change color when mouse over
        dvGas.style.backgroundColor = "#000000";
    }
} function out() {
    let mouseX = MouseEvent //trigger change for mouse position
    let side = "mouseover";
    if(mouseX > 100) side = "mouseout"; //change color when mouse out
    dvGas.innerHTML = side;
    if(side = "mouseout") {
        dvGas.style.backgroundColor = "#0000ff";
    }
}

function push() { //personal composition
    let nya = 0;
    console.log(push);
    dvGas.innerHTML = "gas";
    if (console.count(rise) > 5) console.count(rise) + 1;
}
    


//--------------------Code Graveyard--------------------------------------------
//removed from assignment
/*let peak = { //object that holds variables
    x: 100, y: 100,
    width: 10, height: 10,
    screenColor: "#326500"
}
function setup(){
    createCanvas(400, 400);
    background(peak.screenColor);
}
function draw() { //create div that increases size when mouse pressed
    fill(0);
    rect(peak.x, peak.y, peak.width, peak.height);
    if (mouseIsPressed == true) {
        var width = true;
        var height = true;
    } if (mouseIsPressed == false){
        var width = false;
        var height = false;
    }
}*/ //removed from assignment
//------------------------------------------------------------------------------

//in-class 2/17/22
/*let thisarr = [];
let last1 = 0; let last2 = 1; let f = 1;

for(var i = 0; i < 100; i++) {
    f = last1 + last2;
    last1 = last2;
    console.log(f);
    thisarr[i] = Math.random() * 100;
}

let words = ["Hello", "hi", "how are you"]
for(let i = 0; i < 3; i++) {
    words[i] = words[i].toUpperCase();
    i++
}
console.log(words);*/


//in-class 2/15/22
/* Examples of basic loops
let eye = 0;

while(eye < 5){
    console.log("Hi");
    eye++; // <---vital for avoiding infinite loops

}
//alternate for while statment above
for(let eye = 0; eye < 200; eye++) {
    console.log("Hi");
} */
//----------------------------------------------------------
//need to add elements in index.html
/*let alienDiv = document.getElementById("alien");

let parks = ["Holiday", "Marott", "Central", "Cool Creek"];
//console.log(parks[2]); //Central
console.log(parks.length); //Number of things in parks; 4

for(let i = 0; i < parks.length; i++) {
    alienDiv.innerHTML += parks[i];
}

parks.forEach(park => alienDiv.innerHTML += park);*/
