#! /usr/bin/env node
import inquirer from "inquirer";
// Computer will generate random num
// user input for guessing number
// compare both
const randomnumber = Math.floor(Math.random() * 10 + 1);
console.log(randomnumber);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Guess any number between 1-10? ",
    }]);
if (answers.userGuessedNumber === randomnumber) {
    console.log("Congrats! You guessed a right number");
}
else {
    console.log("You guessed wrong Number");
}
