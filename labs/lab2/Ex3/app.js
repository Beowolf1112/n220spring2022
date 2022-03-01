//Jack Goodman
//1/25/2022
//n220

//Ever Larger, until not
let dia = {
    x: 200, y: 200,
    color: "#990000",
    size: 1
};

function setup() {
    createCanvas(300, 300);
    background(62, 237, 108);
}

function draw() {
    //fill(dia.color); =/= acceptable
    circle(150, 150, dia.size);

    dia.size = dia.size + 1;
    if(dia.size > 200) dia.size = 1; {
    }
}