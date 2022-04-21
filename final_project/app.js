//Jack Goodman
//4/29/2022
//n220

let ship = {
    x: 12, y: 10,
    color: "#990000",
    width: 10, height: 20,
};

let enemy1 = {
    x: 15, y: 15,
    color: "#990000",
    size: 15,
    offsetX: 1,
}

function setup() {
    createCanvas(600,400);
    background(200);
}

function draw() {
    background(200);
    
    //puts ship on page and makes it follow mouse
    fill(ship.color);
    rect(mouseX - ship.width/2, mouseY - ship.height/2, ship.width, ship.height);

    //puts enemy on page
    fill(enemy1.color);
    circle(enemy1.x, enemy1.y, enemy1.size);

    //make enemy change direction in reaction to mouse coordinates
    if (mouseX > 300) {
        enemy1.x += 1;
    }
    if (mouseX < 300) {
        enemy1.x -=1;
    }
    if (mouseY > 200) {
        enemy1.y += 1;
    }
    if (mouseY < 200) {
        enemy1.y -=1;
    }

    //Canvas boarder
    if (enemy1.x < 0) {
        enemy1.x +=2;
    }
    if (enemy1.x > 600) {
        enemy1.x -=2;
    }
    if (enemy1.y < 0) {
        enemy1.y +=2;
    }
    if (enemy1.y > 400) {
        enemy1.y -=2;
    }

    let mousePressed = onclick;
    if (mousePressed) {
        var x = enemy1.offsetX;

    }
    
}

//--------In-Class_4/25-----------------------------------------------
