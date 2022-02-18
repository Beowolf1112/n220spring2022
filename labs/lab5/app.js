//Jack Goodman
//2/17/2022
//n220

//peak pixels
let peak = { //object that holds variables
    x: 100, y: 100,
    width: 10, height: 10,

    screenColor: "#326500"
}

let dvGas = document.getElementById("gas");
let size = 100

dvGas.style.width = size + "px" //set width to increase 10%
dvGas.style.height = size + "px" //set height

function rise() {
    dvGas.style.width = size * 1.1 //set width to increase 10%
    dvGas.style.height = size *1.1 //set height to increase 10%
}

function setup() { //create the overall screen
    createCanvas(400, 400);
    background(peak.screenColor);
}


/*function drawtv(peak) { //create div that increases size when mouse pressed
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

for(let eye = 0; eye < parks.length; eye++) {
    alienDiv.innerHTML += parks[eye];
}

parks.forEach(park => alienDiv.innerHTML += park);*/
