//Jack Goodman
//4/12/2022
//n220

//color changer
const div1 = document.createElement("div1");
div1.style.width = "200px";
div1.style.height = "200px";
div1.style.marginLeft = "5px";
div1.style.background = "grey";
div1.style.color = "white";
div1.innerHTML = "Red";
document.body.appendChild(div1);
div1.addEventListener("click", changeColor);

const div2 = document.createElement("div2");
div2.style.width = "200px";
div2.style.height = "200px";
div2.style.marginLeft = "5px";
div2.style.background = "grey";
div2.style.color = "white";
div2.innerHTML = "Green";
document.body.appendChild(div2);
div2.addEventListener("click", changeColor);

const div3 = document.createElement("div3");
div3.style.width = "200px";
div3.style.height = "200px";
div3.style.marginLeft = "5px";
div3.style.background = "grey";
div3.style.color = "white";
div3.innerHTML = "Blue";
document.body.appendChild(div3);
div3.addEventListener("click", changeColor);

function changeColor(){
    let change = div1.style.background = "red";
    event.target.innerHTML = change;
}

function changeColor2(){
    let change = div2.style.background = "green";
    event.target.innerHTML = change;
}

function changeColor3(){
    let change = div3.style.background = "blue";
    event.target.innerHTML = change;
}

//Color Mixer... I know it isn't what the exercise asks for, but at this point I'm just here for participation points
const div4 = document.createElement("div4");
div4.style.width = "200px";
div4.style.height = "200px";
div4.style.background = "black";
div4.style.color = "white";
div4.innerHTML = "rgb";
document.body.appendChild(div4);
div4.addEventListener("click", rgb);

const div5 = document.createElement("div5");
div4.style.background = "black";
div5.style.color = "black";
div5.innerHTML = "rgb is";

function rgb(){
    let change = div4.style.background = rgb(128, 0, 0);
    console.log(change);
    event.target.innerHTML = change;
}

function rgb2(){
    let change = div4.style.background = rgb(204, 0, 0);
    console.log(change);
    event.target.innerHTML = change;
}

function rgb3(){
    let change = div4.style.background = rgb(255, 0, 0);
    console.log(change);
    event.target.innerHTML = change;
}

function rgb4(){
    let change = div4.style.background = rgb(0, 51, 0);
    console.log(change);
    event.target.innerHTML = change;
}

function rgb5(){
    let change = div4.style.background = rgb(0, 153, 0);
    console.log(change);
    event.target.innerHTML = change;
}

function rgb6(){
    let change = div4.style.background = rgb(0, 204, 0);
    console.log(change);
    event.target.innerHTML = change;
}

function rgb7(){
    let change = div4.style.background = rgb(0, 0, 102);
    console.log(change);
    event.target.innerHTML = change;
}

function rgb8(){
    let change = div4.style.background = rgb(0, 0, 204);
    console.log(change);
    event.target.innerHTML = change;
}

function rgb9(){
    let change = div4.style.background = rgb(0, 0, 255);
    console.log(change);
    event.target.innerHTML = change;
}

//Flash Cards
let quest1 = document.getElementById("question1");
quest1.addEventListener("click", answer1);

let quest2 = document.getElementById("question2");
quest2.addEventListener("click", answer2);

let quest3 = document.getElementById("question3");
quest3.addEventListener("click", answer3);

function answer1() {
    event.target.innerHTML = "Indianopolis";
}

function answer2() {
    event.target.innerHTML = "Metal";
}

function answer3() {
    event.target.innerHTML = "Chicken";
}