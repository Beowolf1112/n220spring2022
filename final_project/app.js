//Jack Goodman
//4/29/2022
//n220

var ship;
var baddie = [];
var drop = [];

function setup() {
    createCanvas(600,400);
    ship = new ship(); //calls a new instance of ship()
    //drop = new drop(width/2, height/2);
    for (var i = 0; i < 5; i++) {
        baddie[i] = new baddies(i*80+80, 60);
    }
}

function draw() {
    background(200);
    ship.show(); //spawns the player ship
    ship.move();

    for (var i = 0; i < drop.length; i++) {
        drop.show();
        drop.move();
        for (var j = 0; j < baddie.length; j++) {
            if (drop[i].hits(baddie[j])){
                baddie[j].grow();
                drop[i].removeHP();

                console.log("Anyway, so I started blasting")
            }
        }
    }

    var edge = false;

    for (var i = 0; i < 5; i++) {
        baddie[i].show();
        baddie[i].move();
        if (baddie[i].x > width || baddie[i].x < 0){
            edge = true;
        }
    }

    if (edge){
        for (var i = 0; i < baddie.length; i++){
            baddie[i].shiftDown();
        }
    }

    for (var i = 0; drop.length >= 0; i--) {
       if (drop[i].toDelete){
           drop.splice(i, 1);
       }
    }
}

function score(){
    this.showScore = function(score) {
        var textHeight = 18;
        textSize(textHeight);
        var scoreText = "Score: " + score;

        fill(255);
        text(scoreText, 10, 20);
    }
}

function keyReleased(){
    if (key !=' ') {
        ship.setDir(0);
    }
}

function keyPressed() {
    if (key === "R"){
        reset();
    }

    if (key === ' ') {
        var drop = new Drop(width/2, height/2);
        drop.push(drop);
    }

    if (keyCode === RIGHT_ARROW) { //right arrow moves ship to the left
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW){ //left arrow moves ship to the right
        ship.setDir(-1); 
    }
}