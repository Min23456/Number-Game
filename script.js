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

function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    if (!guess) return;
    chances--;
    document.getElementById("chancesLeft").innerText = chances;
    let distance = Math.abs(secretNumber - guess);
    if (guess === secretNumber) {
        document.getElementById("message").innerText = "𝓒𝓞ℛℛ𝓔𝓒𝑇! Ⴘ𝓞𝓤 𝓦𝓘𝓝!"
        endGame();
        return;
    }

    if (distance > maxRange * 0.5) {
        document.getElementById("message").innerText = "❄️🆃🅾🅾 🅲🅾🅻🅳! (🅵🅰🆁 🅰🆆🅰🆈)";
    } else if (distance > maxRange * 0.2) {
        document.getElementById("message").innerText = "🔥🥵 𝕎𝕒𝕣𝕞.... (𝔾𝕖𝕥𝕥𝕚𝕟𝕘 ℂ𝕝𝕠𝕤𝕖𝕣)";
    } else {
        document.getElementById("message").innerText = "🔥𝓗𝓸𝓽! (𝓥𝓮𝓻𝔂 𝓒𝓵𝓸𝓼𝓮)"; 
    } 
    if (chances === 0) {
        document.getElementById("message").innerText = "💀𝕺𝖚𝖙 𝖔𝖋 𝕮𝖍𝖆𝖓𝖈𝖊𝖘! 𝕿𝖍𝖊 𝕹𝖚𝖒𝖇𝖊𝖗 𝖜𝖆𝖘" + secretNumber;
    }


}





