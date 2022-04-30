//Jack Goodman
//4/29/2022
//n220

var ship;
var baddie = [];
var drop;

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

    for (var i = 0; i < drop.length; i++) {
        drop.show();
        drop.move();
        for (var j = 0; j < baddie.length; j++) {
            if (drop[i].hits(baddie[j])){
                baddie[j].grow();
                drop[i].removeHP();

                //console.log("Anyway, so I started blasting")
            }
        }
    }

    for (var i = 0; i < 5; i++) {
        baddie[i].show();
    }
    for (var i = 0; drop.length >= 0; i--) {
       if (drop[i].toDelete){
           drop.splice(i, 1);
       }
    }
}

function keyPressed() {
    if (key === ' ') {
        var drop = new Drop(width/2, height/2);
        drop.push(drop);
    }

    if (keyCode === RIGHT_ARROW) { //right arrow moves ship to the left
        ship.move(1);
    } else if (keyCode === LEFT_ARROW){ //left arrow moves ship to the right
        ship.move(-1); 
    }
}