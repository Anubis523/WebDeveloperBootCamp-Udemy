//this part always stays pretty much
var answer = prompt("Are we there yet?");

//Scenario 1 where an answer of yes or yeah will stop the annoy-o-matic
// while (answer !== "yeah" && answer !=="yes")   {
//     answer = prompt("Are we there yet?");
// }
// alert("Yay, we finally made it!");

while (answer.indexOf("yes") < 0)
{
    answer = prompt("Are we there yet?");
}
alert("Yay, we finally made it!");