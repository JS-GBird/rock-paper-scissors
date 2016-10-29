var loopCondition = false;
do {
var userChoice = prompt("rock, paper or scissors?").toLowerCase();
var computerChoice = Math.random();
if (computerChoice < 0.34) {computerChoice = "rock";} 
else if(computerChoice <= 0.67) {computerChoice = "paper";} 
else {computerChoice = "scissors";}
 
// Compare the outcomes
var compare = function (choice1, choice2)
{
    // What if the outcome will be the same?!
    if (choice1 === choice2)    {alert("The computer also chose " + computerChoice + ", so the result is a tie!");}
    
    // What if the user choose rock?
    else if (choice1 === "rock")
    {
        if (choice2 === "scissors"){alert("You chose "+ userChoice + " and the computer chose " + computerChoice + " and therefor you won, congratulations!");}
        else {alert("Aww! You chose "+ userChoice +" and the computer chose " + computerChoice + ", so unfortunately you lost!");}
    }
        // What if the user choose paper?
        else if (choice1 === "paper")
    {
        if (choice2 === "rock"){alert("You chose "+ userChoice + " and the computer chose " + computerChoice + " and therefor you won, congratulations!");}
        else {alert("Aww! You chose "+ userChoice +" and the computer chose " + computerChoice + ", so unfortunately you lost!");}
    }
        // What if the user choose scissors?
        else if (choice1 === "scissors")
    {
        if (choice2 === "paper"){alert(" You chose "+ userChoice + " and the computer chose " + computerChoice + " and therefor you won, congratulations!");}
        else {alert("Aww! You chose "+ userChoice + " and the computer chose " + computerChoice + ", so unfortunately you lost!");}
    }
        // What if the user chose incorrectly?
    else {
         alert("I'm sorry, but " + userChoice + " is not an available option! Please, fill in either rock, paper or scissors..!");
     }
}
compare(userChoice, computerChoice);
var userDes = confirm("Dare to try again?");
var loopCondition = userDes;
} while (loopCondition);
