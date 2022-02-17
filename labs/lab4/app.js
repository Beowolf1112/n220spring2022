//Jack Goodman
//2/1/2022
//n220

//#1 Data-driven display w/ function
/*creates object*/
let objBall = {
    x: 12, y: 10,
    ballColor: "#990000",
    width: 10, height: 10,
};
/*console.log(objBall.x); //12
console.log(objBall.y); //10
objBall.y *= 12; //Increased Y
console.log(objBall.y.toFixed(2));*/

let objPet = {
    x: 15, y: 15,
    petColor: "#990000",
    size: 15,
    offsetX: 1,
    // use offsetX for lab4
}
console.log(objPet.x);
console.log(objPet.y);

//this is #3's attempt for code to store objPet and its elements
window.localStorage.setItem("objPet", JSON.stringify(objPet));

let newPet = window.localStorage.getItem("objPet");
console.log(JSON.parse(newPet));

//now back to #1
function setup() {
    createCanvas(600,400);
    background(200);
}

//Still a part of #1, but might also be used for #2 Virtual Pet?
function draw() {
    background(200);
    
    //make shape follow mouse
    fill(objBall.ballColor);
    rect(mouseX - objBall.width/2, mouseY - objBall.height/2, objBall.width, objBall.height);

    //make pet to follow mouse
    fill(objPet.petColor);
    circle(objPet.x, objPet.y, objPet.size);
    //objPet.x += 1;

    //make Pet change direction in reaction to mouse coordinates
    if (mouseX > 300) {
        objPet.x += 1;
    }
    if (mouseX < 300) {
        objPet.x -=1;
    }
    if (mouseY > 200) {
        objPet.y += 1;
    }
    if (mouseY < 200) {
        objPet.y -=1;
    }

    //world boarder
    if (objPet.x < 0) {
        objPet.x +=2;
    }
    if (objPet.x > 600) {
        objPet.x -=2;
    }
    if (objPet.y < 0) {
        objPet.y +=2;
    }
    if (objPet.y > 400) {
        objPet.y -=2;
    }

    let mousePressed = onclick;

    if (mousePressed) {
        var x = objPet.offsetX;

    }
    
}

//in-class 2/10/22
/*let objTV = {
    x: 40, y: 60,
    width: 50, height: 50,

    screenWidth: 40, screenHeight: 30,
    screenColor: "#990000"
}


function setup() {
    createCanvas(800, 400);
}

function draw() {
    drawtv(objTV);
    console.log(objTV.x);
}

function drawtv(objTV) {
    fill(0);
    rect(objTV.x, objTV.y, objTV.width, objTV.height);
    fill(objTV.screenColor);
    rect(objTV.x+3, objTV.y+3, objTV.screenWidth, objTV.screenHeight);
    fill(0)
    rect(85, 48, 5, 10);
}*/


//in-class 2/8/22
/*let dvTest = document.getElementById("dvTest");
console.log(dvTest);

dvTest.innerHTML = "Hello World";
dvTest.style.backgroundColor = "#00FF99";*/