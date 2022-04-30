//Jack Goodman
//4/29/2022
//n220

var ship;
var baddie = [];

function setup() {
    createCanvas(600,400);
    ship = new ship(); //calls a new instance of ship()
    for (var i = 0; i < 5; i++) {
        baddie[i] = new baddies(i*80+80, 60);
    }
}

function draw() {
    background(200);
    ship.show(); //spawns the player ship
    for (var i = 0; i < 5; i++) {
        baddie[i].show();
    }
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) { //right arrow moves ship to the left
        ship.move(1);
    } else if (keyCode === LEFT_ARROW){ //left arrow moves ship to the right
        ship.move(-1); 
    }
}