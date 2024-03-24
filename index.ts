#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a rendomNumber

// 2) user input a gussing number

// 3) campare user input with computer generated number and show result

const rendomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number",
        message : "Please guess a number between 1-6:",
    },
]);

if(answer.userGuessedNumber === rendomNumber){
    console.log("Congratulation you guessed a right number.");
}
else{
    console.log("you guessed a wrong number");
}