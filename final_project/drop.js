function drop(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false

    this.show = function() {
        noStroke( );
        fill(50, 0, 200);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.removeHP = function( ){
        this.toDelete = true;
    }

    this.hits = function(baddies) {
        var d = dist(this.x, this.y, baddies.x, baddies.y);
        if (d < this.r + baddies.r) {
            return true;
        } else {return false;}
    }

    this.move = function() {
        this.y = this.y - 5; //pixels per second
    }
}