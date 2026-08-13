let randomNumber = Math.floor(Math.random()*100)+1;
let result=document.getElementById("result");
let attempts=0;
let guessbtn=document.getElementById("guessBtn");
let attemptsDisplay=document.getElementById("attempts")
guessbtn.addEventListener("click",function(){
    let guess=Number(document.getElementById("num").value);
    attempts++;
    attemptsDisplay.textContent="Attempts: " + attempts;
    if(guess>randomNumber){
        result.textContent="Too high!";
    }
    else if(guess<randomNumber){
        result.textContent="Too low!";
    }
    else{
        result.textContent="Match Found";
    }
});