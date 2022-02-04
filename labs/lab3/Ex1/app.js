//Jack Goodman
//2/1/2022
//n220

//Drawing Drawer
let orbX = 10;
let orbY = 10;
let orbColor = "#990000";

let objOrb = {
    x: 12,
    y: 10,
    orbColor: "#990000",
    size: 25
};

function setup() {
    createCanvas(600, 400);
    console.log(objOrb.x);
    //creates visuals for compotition(s)
    fill(objOrb.orbColor);
    circle(objOrb.x, objOrb.y, objOrb.size);

    fill(objOrb.orbColor);
    circle(36, 30, objOrb.size);

    fill(objOrb.orbColor);
    circle(60, 50, objOrb.size);

    fill(objOrb.orbColor);
    circle(84, 70, objOrb.size);
}

//Red Remover
//let noRed = removeRed( color(170, 200, 150) );
let red = 0;

function draw() {
    //colorVariableArgumentName.setRed(0, 0, 0);
    red = red + 1;
    if(red > 220) red = 0; {
        fill(red, 0, 0)
        circle(12, 100, objOrb.size);
    }
}

//Polar Point
let r = 1
let res = r + 1

function polarPoint(arguments, [r]) {
    let polarX = r * Math.sin(frameCount / 20);
    let polarY = r * Math.cos(frameCount / 20);
   // console.log(arguments[r]);
   //expected output 1

    translate(100, 100);
    fill( (1 + polarX) * 255);
    circle(mouseX, mouseY);

    translate(100, 100);
    fill( (1 + polarY) * 255);
    circle(mouseX - 20, mouseY - 20);

    translate(100, 100);
    circle(res.x, res.y, 10);

    return createVector(x,y);
}




//in-class 2/1/22
/*let ballX = 10;
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
} */




//in-lab "fix errors" 2/3/22
/*let aou = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if(mouseIsPressed) {
    aou.x = mouseX;
    aou.y = mouseY;
  }
  
  
  let zah = distance( aou, { x: mouseX, y: mouseY });
  console.log(zah);

  if(zah > 120) {
    stroke("#FF0000");
  } 
  else {
    stroke("#000000");
  }
  
  line(aou.x, aou.y, mouseX, mouseY);
}

function distance(p1, p2) {
  
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  //return the distance
   return Math.sqrt(dx*dx + dy*dy);
}*/