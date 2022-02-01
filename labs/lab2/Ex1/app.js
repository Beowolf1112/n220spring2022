//Jack Goodman
//1/25/2022
//n220

function setup() {
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


} 

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