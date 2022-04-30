//Jack Goodman
//4/29/2022
//n220

var ship;

function setup() {
    createCanvas(600,400);
    ship = new ship(); //calls a new instance of ship()
}

function draw() {
    background(200);
    ship.show(); //spawns the player ship
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) { //right arrow moves ship to the left
        ship.move(1);
    } else if (keyCode === LEFT_ARROW){ //left arrow moves ship to the right
        ship.move(-1); 
    }
}