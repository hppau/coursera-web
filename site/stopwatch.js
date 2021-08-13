window.onload = function () {
    var seconds = 00; 
    var ball = document.getElementById("ball");var ball2 = document.getElementById("ball2");
    var tens = 00; 
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById('Start');
    var buttonStop = document.getElementById('Stop');
    var buttonReset = document.getElementById('Restart');
    var Interval;
    buttonStart.onclick = function() {
        if(ball.classList != "move"){
            ball.classList.add("move");
        }
       clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
       setTimeout(function(){ball.classList.remove("move")},500);
       ball.innerHTML = "Starting";
       ball2.style.backgroundColor = "green";
    }
    
    buttonStop.onclick = function() {
        clearInterval(Interval);
        ball.innerHTML = "Stopped";
        ball2.style.backgroundColor = "red";
    }
    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds + " :";
        ball.innerHTML = "Reset";
        ball2.style.backgroundColor = "blue";
    }
    function startTimer () {
        tens++; 
      
        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds + " :";
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds + " :";
        }
    }
}