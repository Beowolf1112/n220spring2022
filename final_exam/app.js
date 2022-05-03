//Jack Goodman
//5/3/2022
//n220

//Program One
let allNamesClicked = "";
let dvSelectedVehicle = document.getElementById("selectVehicle");
let elements = document.getElementsByClassName("ex"); //acts as array below

for(let i=0; i<elements.length; i++) { //array for event listing
    elements[i].addEventListener("click", dothing);
}

function dothing(event) {
    
    //Allows the elements of vechicle name to remain on page and appear multiple times without reseting
    allNamesClicked += event.target.dataset.vehicle;
    dvSelectedVehicle.innerHTML = allNamesClicked;
}

/* //profanity filter removed since not techinially what Program One asked for.
//let lemon = document.getElementById("lemons");

function lemons() { 
    let car = lemon.value.split(" "); //recognises words, not individual letters/numbers
    let newCar = ""; //resets input

    for(var i=0; i<car.length; i++) {
        if(car[i]=="cars" || car[i]=="bikes" || car[i]=="vans" || car[i]=="trucks" || car[i]=="velocipedes") {
            console.log("that is a lemon");
        } else {
            newCar += car[i];
            console.log("no lemons found. Hit the road, Jack!!!");
        }
    }
}*/

//Program Two
let div = document.getElementById("thousand");
            //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
let number = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 0];
let percent = divide(number); //pastes console.logs repeatedly

function divide(number) {
    let division = number[i];
    for(var i = 0; i < number.length; i++) {
        if(division = number[0]){
            console.log("1000");
        } else(division = [1])
            console.log("900");
        if(division = number[2]){
            console.log("800");
        } else(division = [3])
            console.log("700");
        if(division = number[4]){
            console.log("600");
        } else(division = [5])
            console.log("500");
        if(division = number[6]){
            console.log("400");
        } else(division = [7])
            console.log("300");
        if(division = number[8]){
            console.log("200");
        } else(division = [9])
            console.log("100");
        if(division = number[10]){
            console.log("0");
        }
    } 
}

//-----Removed_HTML--------------------------------------------------------------------------------------------------------------
/* <input id="lemons"><br />
    <button onclick="lemons()">Got A Lemon?</button>

*/