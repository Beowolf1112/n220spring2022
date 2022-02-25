//Jack Goodman
//2/22/2022
//n220

//Loop, but big
let bigLoop = document.getElementById("bigLoop");
let big = [1000, 2000, 3000, 4000, 5000];
let statBig = big[0]; bigLoop.innerHTML = statBig; //connects to div
let statBig1 = big[1]; bigLoop1.innerHTML = statBig1;
let statBig2 = big[2]; bigLoop2.innerHTML = statBig2;
let statBig3 = big[3]; bigLoop3.innerHTML = statBig3;
let statBig4 = big[4]; bigLoop4.innerHTML = statBig4;

let res = bigLop(big); //make variables in big appear on console
function bigLop(bigCount) {
    for(var i = 0; i < bigCount.length; i++) {
        console.log(bigCount[i]);
    }
}

//Beep Bop
let beepBop = document.getElementById("beepBop");
          //0, 1,  2, 3,  4,  5,  6,  7
let beep = [6, 9, 10, 12, 15, 20, 21, 25];
let res1 = threeFive(beep); //puts beep on console
beepBopStat = beep[7]; //calls beep
beepBop.innerHTML = beepBopStat; //puts beepBopStat on page

function threeFive(beep) {
    let beepBop = beep[i]; //call random beep elements
    for(var i = 0; i < beep.length; i++) {
        if(beepBop = beep[0, 1, 3, 6]) { // divisible by 3
            console.log("beep");
        } else(beepBop = [2, 5, 7]) //divisible by 5
            console.log("bop");
        if(beepBop = beep[4]) { //divisible by 3 and 5 
            console.log("beepbop")
        }
    } 
}

//Runner Up
let runTimes = document.getElementById("runTimes");
let times = ["1:25.06", "1:10.17", "0:59.36"];
let res2 = timerUp(times);
runTimesStat = times[0]; runTimes.innerHTML = runTimesStat;
runTimesStat1 = times[1]; runTimes1.innerHTML = runTimesStat1;

function timerUp(times) {
    let runtimes = times[i];
    for(var i=0; i < times.length; i++) {
        if(runTimes = times[0]) {
            console.log(times[0]);
        } else(runTimes = times[1])
        console.log(times[1]);
    }
}


//-------------------------------------------------------------------------------------
//in-class 2/22/22
//Review - No New Code

//in-class 2/24/22
/*let testArray = [20, 45, 10, 70, 88, 100];
let res = countTwenties(testArray);
console.log("Final Count: " + res);
//Takes an Array of numbers as an argument
function countTwenties(numbersArray) {
    let count = 0;
    //counts numbers in array above 20
    //console.log(testArray[0] > 20);
    for(var i = 0; i < testArray.length; i++) {
        if(numbersArray[i] > 20) {
            console.log(numbersArray[i] + ": its greater than 20");
            count = count + 1;
        }
    } 
    //(if count is less than three): The count of those numbers
    if(count < 3) {
        return count;
    }
    //(if count is greater than three): the number -1
    if(count > 3) {
        return -1;
    }
}*/
