//Jack Goodman
//3/1/22
//n220

//Question#1
let konami = document.getElementById("konami");
           //0,    1,     2,      3,      4,     5,       6,      7,       8,    9,   10,   11
let code = ["up" - "up", "down", "down", "down", "left", "right", "left", "right", "a", "b", "start"];
let res = konamiCode(code);
konamiStat = code[2];
konami.innerHTML = konamiStat;

function konamiCode(code) {
    let konami = 0;
    for(var i=0; konami < code.length; i++) {
        if(konami = code[0]) {
            console.log(code[0]);
            konami = konami +1;
        }
        if(konami = code[1]) {
            console.log(code[1]);
            konami = konami +2;
        }
        if(konami = code[2]) {
            console.log(code[2]);
            konami = konami +3;
        }
        if(konami = code[3]) {
            console.log(code[3]);
            konami = konami +4;
        }
        if(konami = code[4]) {
            console.log(code[4]);
            konami = konami +5;
        }
        if(konami = code[5]) {
            console.log(code[5]);
            konami = konami +6;
        }
        if(konami = code[6]) {
            console.log(code[6]);
            konami = konami +7;
        }
        if(konami = code[7]) {
            console.log(code[7]);
            konami = konami +8;
        }
        if(konami = code[8]) {
            console.log(code[8]);
            konami = konami +9;
        }
        if(konami = code[9]) {
            console.log(code[9]);
            konami = konami +10;
        }
        if(konami = code[10]) {
            console.log(code[10]);
            konami = konami +11;
        }
        if(konami = code[11]) {
            console.log(code[11]);
            konami = konami +12;
        }
    }
}

//Question#2
let dvYes = document.getElementById("yes");
dvYes.innerHTML = "yes";

function click() {
    let yes = 0
    let o = "yes";
    let on = "no";

    if(mouseclick = 0){
        console.log(o +"no");
        yes = yes + 1;
    }
    if(mouseclick = 1){
        console.log(on + "yes");
        yes = yes - 1;
    }
    console.log(click);
}
