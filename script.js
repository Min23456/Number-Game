let secretNumber = 0;
let maxRange = 0;
let chances = 0;


function startGame(){
    maxRange = parseInt(document.getElementById("rangeSelect").value);
    secretNumber = Math.floor(Math.random()* maxRange) + 1;
    chances = 5;
    document.getElementById("chancesLeft").innerText = chances;
    document.getElementById("message").innerText = "";
    document.getElementById("gameArea").style.display = "block";
    

}

