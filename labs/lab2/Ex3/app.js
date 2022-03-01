//Jack Goodman
//1/25/2022
//n220

//Ever Larger, until not
let dia = {
    x: 200,
    y: 200,
    color: "#990000",
    size: 1
};

function setup() {
    createCanvas(400, 400);
    background(62, 237, 108)
}

function draw() {
    dia.x = dia.x + 1;
    if(dia.x > 200) dia = 0; {
        //fill(dia.color); =/= acceptable
        fill(0, 0, 0);
        circle(12, 100, dia.size);
    }
}