var p1Button = document.querySelector("#p1");
var plDisplay = document.querySelector("#p1Display");

var p2Display = document.querySelector("#p2Display");
var p2Button = document.getElementById("p2");

var resetButton = document.querySelector("#reset");

var numInput = document.querySelector("input");
var finalScoreDisplay = document.getElementById("finalScoreDisplay");

var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;


p1Button.addEventListener("click", function (){
    if (!gameOver)
    {
        p1Score++;
        if (p1Score === winningScore)
        {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        plDisplay.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function (){
    if (!gameOver)  {
        p2Score++;
        if (p2Score === winningScore)
        {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function () {
    p1Score = 0;
    p2Score = 0;
    plDisplay.textContent = p1Score;
    p2Display.textContent = p2Score;

    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
});

numInput.addEventListener("change", function () {
    finalScoreDisplay.textContent = numInput.value;
    winningScore = parseInt(numInput.value);
});