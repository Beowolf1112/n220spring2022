//Jack Goodman
//2/1/2022
//n220

let ballX = 10;
let ballY = 10;
let ballColor = "#990000";

//const Z = 100;
let objBall = {
    x: 12,
    y: 10, 
    ballColor: "#990000", 
    size: 25 
};

function setup() {
    createCanvas(652, 399);
    //console.log( objBall.x );

    fill(objBall.ballColor);
    circle(objBall.x, objBall.y, objBall.size);
}