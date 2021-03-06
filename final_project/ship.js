function ship() {
    this.x = width/2; //spawns ship at center of page
    this.xdir = 0;

    this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height-20, 20, 60); //gives ship dimensions and centers at bottom page
    }

    this.setDir = function(dir) {
        this.xdir = dir;
    }

    this.move = function(dir) { //dir = argument that gets the 1 or -1 from ship.move
        this.x += dir*5; //*5 = moves 5 pixels per second
    }
}