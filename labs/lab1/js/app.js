function setup() {
    createCanvas(800,600);

    stroke(255, 255, 255)
    strokeWeight(10);
    
    fill(104, 103, 172); /*#6877AC*/
    circle(150, 150, 200);
    fill(162, 103, 172); /*A267AC*/
    circle(150, 150, 150);
    fill(206, 123, 176); /*CE7BB0*/
    circle(150, 150, 50);
    fill(255, 188, 209); /*FFBCD1*/ 
   
    circle(150, 150, 40);
    circle(300, 150, 40);

    arc(200, 300, 200, 200, 0, PI + QUARTER_PI, CHORD);
}