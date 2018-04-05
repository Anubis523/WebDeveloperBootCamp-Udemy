var secretNum = 7;
var guess = Number(prompt ("Guess a number"));
while (guess !== secretNum)
{
    if (guess > secretNum){
       guess = Number(prompt("GUESS LOWER NUMBER"));
    }
    else{
       guess = Number(prompt ("GUESS HIGHER NUMBER"));
   }
}
alert("YOU GOT IT RIGHT");
 