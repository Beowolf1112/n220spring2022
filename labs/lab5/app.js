//Jack Goodman
//2/17/2022
//n220



//in-class 2/15/22
/* Examples of basic loops
let eye = 0;

while(eye < 5){
    console.log("Hi");
    eye++; // <---vital for avoiding infinite loops

}
//alternate for while statment above
for(let eye = 0; eye < 200; eye++) {
    console.log("Hi");
} */
//----------------------------------------------------------
//Secret Word: keys
//need to add elements in index.html
let alienDiv = document.getElementById("alien");

let parks = ["Holiday", "Marott", "Central", "Cool Creek"];
//console.log(parks[2]); //Central
console.log(parks.length); //Number of things in parks; 4

for(let eye = 0; eye < parks.length; eye++) {
    alienDiv.innerHTML += parks[eye];
}

parks.forEach(park => alienDiv.innerHTML += park);
