function setup() {
    let x = 50;

    createCanvas(500, 500);
    text("Hello work", x, 50);
    
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