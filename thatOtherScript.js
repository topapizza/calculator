const display = document.getElementById("display");
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
let x;
let y;
let xSquared;
let ySquared;
let z;

function appendToDisplay(input){
    display.value += input; 
}
function appendToDisplay1(input){
    display1.value += input; 
}

function calculate(){
    console.log("Pitäis toimia tähän mennessä");
    x = display.value;
    console.log(x);
}

function calculate1(){
    console.log("toimii tääki");
    y = display1.value;
    console.log(y);
}

function actualyCalculate(){
    xSquared = Math.pow(x, 2)
    ySquared = Math.pow(y, 2);
    console.log(xSquared);
    z = xSquared + ySquared;
    console.log(z);
    z = Math.sqrt(z);
    console.log(z);
    display2.value = z;
}