/** 
 * Title: Higher Lower
 * Created by: Andrew Yang
 * Date: 10 Oct 2022
 */

/*
 * GLOBAL VARIABLES
 * n = max number to guess for
 * answer = randomly generated number to be guessed
 * guessList = stores the guesses
*/
let n = 0;
let answer = 0;
let guessList = new Array(0);

// Prompts for max value
function promptMax() {
    let valid = false;
    let num = window.prompt("Please Enter a Maximum Number to guess for");
    //Checks if user input is valid
    while (!valid) {
        if (!isNaN(num) && num > 0) {
            num = Math.round(num);
            n = num;
            valid = true;
            //Generates number between 1 and max value from user
            answer = Math.floor(Math.random() * n + 1);
        } else {
            num = window.prompt("Please Enter a Valid Maximum Number to guess for");
        }
    }
}

// Function to guess number
function guess() {
    //retrieves value from guess input field
    let num = document.getElementById("guess").value;
    //Paragraph which output whether or not u were correct
    let correct = document.getElementById("correct");

    //Checks if guessing number is valid
    if ((!isNaN(num)) && (num > 0) && (num <= n)) {
        num = Math.round(num);
        //Checks if user got correct input, prints if true, 
        //check duplicates if false
        if (answer == num) {
            guessList.push(num);
            printGuesses();

        } else {
            duplicateCheck(num);
        }
    } else if (isNaN(num)) {
        //checks if input is a number
        correct.textContent = "That is not a number!";
    } else {
        //checks if input is in range
        correct.textContent = "That number is not in range (1 - " + n + "), try again.";
        validNum = false;
    }
}

// This function prints out user guesses
function printGuesses() {
    let text = "";
    text = "You got it! It took you " +
        guessList.length + " tries and your guesses were ";
    //concatenates numbers stored in array 
    for (let i = 0; i < guessList.length; i++) {
        if (i == guessList.length - 1) {
            text += guessList[i] + "."
        } else {
            text += guessList[i] + ", ";
        }
    }
    //Show result
    correct.textContent = text;
}

//This function checks guessingList array to ensure no duplicate values
//Param: num = number guessed
function duplicateCheck(num) {
    let duplicate = false;
    for (let i = 0; i <= guessList.length; i++) {
        if (num == guessList[i]) {
            duplicate = true;
        }
    }
    if (duplicate) {
        correct.textContent = "This number has already been guessed!";
    } else {
        correct.textContent = "You did not get it."
        guessList.push(num);
    }
}