//Jack Goodman
//2/1/2022
//n220

//Data-driven display w/ function
/*creates object*/
let objBall = {
    x: 12, y: 10,
    ballColor: "#990000",
    width: 10, height: 10,
};
/*console.log(objBall.x); //12
console.log(objBall.y); //10
objBall.y *= 12; //Increased Y
console.log(objBall.y.toFixed(2));*/

function setup() {
    createCanvas(600,400);
    background(200);
}

function draw() {
    background(200);
    
    fill(objBall.ballColor);
    rect(mouseX - objBall.width/2, mouseY - objBall.height/2, objBall.width, objBall.height);
}


//in-class 2/10/22
/*let objTV = {
    x: 40, y: 60,
    width: 50, height: 50,

    screenWidth: 40, screenHeight: 30,
    screenColor: "#990000"
}


function setup() {
    createCanvas(800, 400);
}

function draw() {
    drawtv(objTV);
    console.log(objTV.x);
}

function drawtv(objTV) {
    fill(0);
    rect(objTV.x, objTV.y, objTV.width, objTV.height);
    fill(objTV.screenColor);
    rect(objTV.x+3, objTV.y+3, objTV.screenWidth, objTV.screenHeight);
    fill(0)
    rect(85, 48, 5, 10);
}*/

//in-class 2/8/22
/*let dvTest = document.getElementById("dvTest");
console.log(dvTest);

dvTest.innerHTML = "Hello World";
dvTest.style.backgroundColor = "#00FF99";*/