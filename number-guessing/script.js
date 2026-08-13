let randomNumber = Math.floor(Math.random()*100)+1;
let result=document.getElementById("result");
let attempts=0;
let guessbtn=document.getElementById("guessBtn");
let attemptsDisplay=document.getElementById("attempts")
let resBtn=document.getElementById("resBtn");
guessbtn.addEventListener("click",function(){
    let guess=Number(document.getElementById("num").value);
    attempts++;
    attemptsDisplay.textContent="Attempts: " + attempts;
    if(guess===randomNumber){
        result.textContent="Match Found"
    }
    else if(Math.abs(guess-randomNumber)<=5){
        result.textContent="Very close!";
    }
    else if(guess<randomNumber){
        result.textContent="Too low!";
    }
    else{
        result.textContent="Too high!"
    }
});
resBtn.addEventListener("click",function(){
    randomNumber=Math.floor(Math.random()*100)+1;
    attempts=0;
    result.textContent=" ";
    attemptsDisplay.textContent=" ";
    document.getElementById("num").value="";
})