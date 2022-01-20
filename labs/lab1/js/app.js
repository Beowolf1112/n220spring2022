//Jack Goodman
//1/18/2022
//n220

//application level variables
let size = 10;

//setup the application

function setup() {
    //create canvas
    createCanvas(800,600);
    
    stroke(255, 255, 255)
    strokeWeight(10);
    
    fill(104, 103, 172);
    circle(150, 150, 200);
    fill(162, 103, 172);
    circle(150, 150, 150);
    fill(206, 123, 176);
    circle(150, 150, 50);
    fill(255, 188, 209);
   
    circle(150, 150, 40);
    circle(300, 150, 40);

    arc(200, 300, 200, 200, 0, PI + QUARTER_PI, CHORD);
}

function draw() {

    //increase size
    size = size + 1;
    console.log(size);

    //change fill color to red
    fill(255, 99, 99);
    //draw a circle to the center at an increasing rate
    //circle(150, 150, size);

    circle(150, 150, 50)

    if(size > 200) {
        fill(255, 188, 209);
    }
}