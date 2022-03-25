//Jack Goodman
//3/8/2022
//n220

//Greeter
let txtName = document.getElementById("txtName");
let txtWord = document.getElementById("txtWord");
let txtTimes = document.getElementById("txtTimes");
let hello = document.getElementById("hello");
let tax = document.getElementById("tax");

function helloName(){
    let userName = txtName.value;
    let name = `Hello ${userName}`;
    console.log(userName);

    hello.innerHTML = name;
    txtName.value = "";
}

//Tip Calculator
function payTax(){
    let userName = txtName.value;
    let name = `Tip: ${userName}. Total: ${userName}`;
    console.log(userName);

    let times = Number(txtTimes.value);
    tax.innerHTML = name;
    txtName.value = "";
}



//-----------In-lab 3/10/22---------------------------------------
/*let vowel = document.getElementById(vowel);

function alphabet() {
    let word = vowel.value;
    let newWord = "";

    for(var i=0; i<word.length; i++) {
        //check to see if vowel or not; || = seperates if-statments
        //if(!(word[i]=="a" ||...)) --> does else-statment for you.
        if(word[i]=="a" ||word[i]=="e" || word[i]=="i" ||word[i]=="o" ||word[i]=="u") {
            console.log("it's a vowel");
        } else {
            newWord += word[i];
        }
    }
}*/


//-----------In-class 3/8/22--------------------------------------
/*let txtName = document.getElementById("txtName");
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
    }'/ //more complicated version of "let lovers"vvv
    let lovers = `${userName}, ${userName}, ${userName} and  are your lovers.`;
    //let times = Number(txtTimes.value); //changes string into number-based inputs
    dvLoverName.innerHTML = lovers;

    txtName.value = "";
} */

/*---------------------Placeholder for example html--------------------------------------
    <input id="vowel"><br />
    <button onclick="alphabet()">remove vowels</button>

    <input id="txtName"><br />
    <button onclick="generateSong()">Generate Song</button>

    <div id="storyResult"></div>
    <button onclick="generateStory()">Generate Story</button>
    
    <div id="loverName"></div>
    <button onclick="generateLover()">Generate Lover</button>*/