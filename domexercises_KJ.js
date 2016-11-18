//generates random number outside of function
var getRandom = Math.floor((Math.random( ) * 100) + 1);
//prints number to the console for troubleshooting purposes
console.log(getRandom);
//create a variable to count number of guesses
var numOfTimes = 0;
//creates a function that prompts the user to guess a number
function hiLo (){
//gets the name entered by the user
 var name = document.getElementById("nameField").value;
//gets the number entered by the user
 var num = document.getElementById("inputField").value;
//checks user input to make sure it is a number
    if(isNaN()){
         document.getElementById("outputField").innerHTML = "Invalid input, please enter a number";
         document.getElementById("inputField").value = " ";
       }
//creates a condition that executes when user's guess is wrong
     if (parseInt(num) < getRandom && numOfTimes < 7){
       document.getElementById("outputField").innerHTML = "Guess is too low, guess again";
       document.getElementById("inputField").value = " ";
       numOfTimes++;
     }
     else if (parseInt(num) > getRandom && numOfTimes < 7){
       document.getElementById("outputField").innerHTML = "Guess is too high, guess again";
       document.getElementById("inputField").value = " ";
       numOfTimes++;
     }
//creates a condition that returns a message if user guesses correctly
     else if(parseInt(num) === getRandom){
       document.getElementById("outputField").innerHTML = ("Congratulations " + name + "! " + "You win!");
     }
//creates a condition where user loses if more than 7 wrong guesses
     else if (numOfTimes === 7) {
       document.getElementById("outputField").innerHTML = "You lose!!!!";
     }
 }
