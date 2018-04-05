/*use let as opposed to  var b/c function scope will not end in undefined errors that are harder to debug as opposed
to block scope which uses a more orthodox programming method*/
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let messageDisplay = document.querySelector("#message");
let colorDisplay = document.getElementById("colorDisplay");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

//toggles the selected class b/n easy and hard buttons
easyBtn.addEventListener("click", function()    {
    changeDifficulty(hardBtn,easyBtn,"selected",3);
});

//see above^^^^
hardBtn.addEventListener("click", function()    {
    changeDifficulty(easyBtn,hardBtn,"selected",6);
});

/*a function that takes two buttons and removes the third argument
from the first argument, a button and adds it to the second, a button
then it resets the game with a number of squares that correspond with the last argument*/
function changeDifficulty(remover, adder, className, squareNum)
{
    remover.classList.remove(className);
    adder.classList.add(className);
    setup(squareNum);
}

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function ()   {
    setup(numSquares);
    messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++)    {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click" , function ()   {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor)   {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again ?";
            changeColors(pickedColor);
            h1Change(pickedColor);

        }   else    {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

//changes the background color of h1 element
function h1Change(bg)   {
    let h1 = document.querySelector("h1");
    h1.style.backgroundColor = bg;
}
//change all colors to the picked color, called when correct color is picked
function changeColors (x)   {
    for (let i = 0; i < squares.length; i++)    {
        squares[i].style.backgroundColor = x;
    }
}

//picks one random color, to be used in a loop for all colors including the picked one
function pickColor()    {
    return colors[Math.floor(Math.random()*numSquares)];
}
//returns a number b/n 0 and 5 that is used to select the index of the picked color
function randomColor()  {
    let r = randomRGB(); 
    let g = randomRGB();
    let b = randomRGB();
    //remember to add spaces after the commas to make sure it can compare the string values
    return "rgb("+r+", "+g+", "+b+")";
}

//returns the random single r, g, or b element as a random number b/n 0 and 255
function randomRGB()    {
    return Math.floor(Math.random()*256);   //never reaches 256 because its a random between 0 and 255.9999_
}

//generates num number of random colors that populate an array at the beginning of game or round
function generateRandomColors(num)  {
    let arr = [];
    for (let i = 0; i< num; i++)    {
        let color = randomColor();
        arr.push(color); 
    }
    return arr;
}

//this function is a refactor 
function setup(num) {
    resetButton.textContent = "New Colors";
    numSquares = num;
    //reset the h1 background color to body background color
    h1Change("steelblue");
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (let i = 0; i < squares.length; i++)    {
        if (colors[i])  {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else    {
            squares[i].style.display = "none";
        }
    }
}
/*TODO
-refactor code to eliminate redundancies and length, create functions that reduce lines and complexity of line reads
-make prettier
-use this as a base to create own pretty project to demonstrate mastery of basic to intermediate javascript programming
-continue the tutorial and break down where/how things work and why*/