//Jack Goodman
//1/25/2022
//n220

//PuckSide
let objBall = {
    x: 12, y: 10,
    color: "#000000",
    size: 25,
};

function draw() {
    createCanvas(400, 300);
    background(62, 237, 108);
    
    //make shape and shape follow mouse
    fill(objBall.color);
    circle(mouseX - objBall.size/2, mouseY - objBall.size/2, objBall.size);

    if (mouseX > 200) { //Make Circle red on right
        objBall.color = "#990000";
    }
    if (mouseX < 200) { //Make Circle blue on left
        objBall.color = "#0098ff";
    }
}

//--------------Code Graveyard------------------------------------------------
//Counter
/*function setup() {
    //let x = 50;
    let number = 0;

    //createCanvas(500, 500);
    //text("Hello work", x, 50);

   function counter(couterUp) {
    if(counterUp == "increase") {
        number += 1;
    }

    let res = counter("increase");
    console.log("Increase_Number" + res)

    if(res == true) {
        res = counter("increase");
        console.log("Increase_Number" + res)
    }
   }
} */

//PuckSide
/*if(objBall.x > 150) {
        objBall.color = "#990000";
        //fill("#990000");
    } if(objBall) {
        objBall.color = "#0098ff";
    } */
//-----------------------------------------------------------------------------------

//repeating function in-class example
/*let snowmount = 10;

//snow shovel example
function shovel(shovelType) {


    if(shovelType == "plastic") {
        //snowmount = snowmount + 2
        snowmount -= 2;
    }

    if(shovelType == "metal") {
        snowmount -= 1;
    }
    
    return (snowmount > 0);
}

let res = shovel("plastic");
console.log("It done?" + res);

if(res == true) {
    res = shovel("plastic");
    console.log("It done?" + res);
}

//if(res == true);
if(!res) {
    res = shovel("plastic");
    console.log("It done?" + res);
}

res = shovel("metal");
console.log("It done?" + res);*/