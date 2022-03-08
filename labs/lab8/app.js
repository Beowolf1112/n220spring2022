//Jack Goodman
//3/8/2022
//n220

let txtName = document.getElementById("txtName");
let txtTimes = document.getElementById("txtTimes");
let dvStoryResult = document.getElementById("storyResult");
let dvLoverName = document.getElementById("loverName");

function generateSong() {
    let userName = txtName.value; //allow user input to become varable
    console.log(userName);

    txtName.value = ""; //resets value to nothing
}

function generateStory() {
    let userName = txtName.value; //allow user input to become varable
    //console.log(userName);
    let story = `${userName} is tired and so ${userName} fell asleep in the car.`;
    //^^Adds text to page when button pressed
    dvStoryResult.innerHTML = story;

    txtName.value = ""; //resets value to nothing
}

function generateLover() {
    let userName = txtName.value; 
   /* let val = "";
    for(let i=0; i<5; i++) {
        val += username + "";
    }*/ //more complicated version of "let lovers"vvv
    let lovers = `${userName}, ${userName}, ${userName} and  are your lovers.`;
    //let times = Number(txtTimes.value); //changes string into number-based inputs
    dvLoverName.innerHTML = lovers;

    txtName.value = "";
}