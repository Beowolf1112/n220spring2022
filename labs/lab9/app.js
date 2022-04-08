//Jack Goodman
//4/5/2022
//n220

//Clean-Up
let hash = document.getElementById(hashbrown);

function hashtag() {
    let tag = hash.value;
    let newTag = "";

    for(var i=0; i<tag.length; i++) {
        if(tag[i]=="#") {
            console.log("cleaned up");
        } else {
            newTag += tag[i];
        }
    }
}

//Change Styles
const div1 = document.createElement("div1");
div1.style.width = "100px";
div1.style.height = "100px";
div1.style.background = "red";
div1.style.color = "white";
div1.innerHTML = "One__";
document.body.appendChild(div1);
div1.addEventListener("click", changeStyles);

const div2 = document.createElement("div2");
div2.style.width = "100px";
div2.style.height = "100px";
div2.style.background = "red";
div2.style.color = "white";
div2.innerHTML = "Two__";
document.body.appendChild(div2);

const div3 = document.createElement("div3");
div3.style.width = "100px";
div3.style.height = "100px";
div3.style.background = "red";
div3.style.color = "white";
div3.innerHTML = "Three";
document.body.appendChild(div3);

function changeStyles(){
    let change = div1.style.background = "blue";
    event.target.innerHTML = change, change2, change3;
    let change2 = div1.style.width = "99px";
    let change3 = div1.style.height = "99px";
}

function changeStyles2(){
    let change = div2.style.background = "blue";
    event.target.innerHTML = change, change2, change3;
    let change2 = div2.style.width = "99px";
    let change3 = div2.style.height = "99px";
}

function changeStyles3(){
    let change = div3.style.background = "blue";
    event.target.innerHTML = change, change2, change3;
    let change2 = div3.style.width = "99px";
    let change3 = div3.style.height = "99px";
}

//Divisible By Seven
let steve = document.getElementById(seven);

function divisible() {
    let dive = steve.value;
    let newNumber = "";

    for(var i=0; i<dive.length; i++) {
        if(dive[i]=="14" ||dive[i]=="21" || dive[i]=="28" ||dive[i]=="35" ||dive[i]=="42") {
            console.log("it is divisible by seven");
        } else {
            newNumber += dive[i];
        }
    }
}


//---------In-Lab__4/7/22----------------------------------------------------------
/* function ticTacTo(){
    var grid = [
        [0,1,0],
        [0,0,2],
        [0,0,0],
    ];

    for(var y=0; y < grid.length; y++){
        for(var x=0; x < grid[0].length; x++){
            
            console.log(grid[y][x]);
        }
    }
}*/

//---------In-Class__4/5/22--------------------------------------------------------
/*let exampleDiv = document.getElementById("example");
exampleDiv.addEventListener("click", dothing);

let exampleDiv2 = document.getElementById("example2");
exampleDiv2.addEventListener("click", dothing2);

function dothing() {
    //console.log(event.target); //makes a refrence to the code in console log
    event.target.innerHTML = "DONE"; //changes button text
    //console.log("I've been invoked");
}

function dothing2() {
    event.target.innerHTML = "DONE";
}
//--------------old html-----------------------------------------------------------
<button id="example">remove vowels</button>
<button id="example2">remove vowels</button>*/