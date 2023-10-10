var targetNumber = Math.floor(Math.random()*99 + 1);
const startButton = document.getElementById("start");
const currentNumber = document.getElementById("Num");
const guesses = document.getElementById("ng");
const temp = document.getElementById("hc");
var numVar = 50;
var numGuesses = 5;

function changeVal(id){
   if(id == "m25"){
    numVar = numVar-25;
   }
   else if(id == "m10"){
    numVar -=10;
   }
   else if(id == "m5"){
    numVar -= 5;
   }
   else if( id == "m"){
    numVar--;
   }
   else if(id == "p25"){
    numVar = numVar+25;
   }
   else if(id == "p10"){
    numVar +=10;
   }
   else if(id == "p5"){
    numVar += 5;
   }
   else if( id == "p"){
    numVar++;
   }
    display();
}

function display() {
    if(numVar < 1){
        numVar = 1;
    }
    else if( numVar > 100){
        numVar = 100;
    }
currentNumber.innerHTML = numVar;
guesses.innerHTML = "number of guesses: " + numGuesses;

}

function guess(){
    if(Math.abs(targetNumber - numVar) == 0){
        temp.innerHTML = "You Win";
    }
    else if(Math.abs(targetNumber - numVar) <= 5){
        temp.innerHTML = "Very Hot";
    }
    else if(Math.abs(targetNumber - numVar) > 5 && Math.abs(targetNumber - numVar) < 9){
        temp.innerHTML = "Hot";
        numGuesses--;
    }
    else if(Math.abs(targetNumber - numVar) > 8 && Math.abs(targetNumber - numVar) < 16){
        temp.innerHTML = "Very Warm";
        numGuesses--;
    }
    else if(Math.abs(targetNumber - numVar) > 15 && Math.abs(targetNumber - numVar) < 21){
        temp.innerHTML = "Warm";
        numGuesses--;
    }
    else if(Math.abs(targetNumber - numVar) >20 && Math.abs(targetNumber - numVar) < 31){
        temp.innerHTML = "Cool";
        numGuesses--;
    }
    else if(Math.abs(targetNumber - numVar) > 30 && Math.abs(targetNumber - numVar) < 41){
        temp.innerHTML = "Very Cool";
        numGuesses--;
    }
    else if(Math.abs(targetNumber - numVar) > 40 && Math.abs(targetNumber - numVar) <56){
        temp.innerHTML = "Cold";
        numGuesses--;
    }
    else {
        temp.innerHTML = "Very Cold";
        numGuesses--;
    }
    display();

}
