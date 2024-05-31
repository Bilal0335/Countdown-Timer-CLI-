#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t<<< ========================================================= >>> `));
console.log(chalk.yellowBright.bold("\n\t\t        Welcome to BilalCode - CountDown_Timer_App\n"));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t<<< ========================================================= >>> `));
const respons = await inquirer.prompt([
    {
        type: "input",
        name: "userInput",
        message: chalk.blue.bold("Please enter the Amount of second"),
        validate: (input) => {
            if (isNaN(input)) {
                return chalk.red.bold("please enter valid number");
            }
            else if (input > 60) {
                return chalk.red.bold("second must be in 60");
            }
            else {
                return true;
            }
        },
    },
]);
let input = Number(respons.userInput);
function startTime(val) {
    const inTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(inTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log(chalk.red.bold("Timer has expired"));
            process.exit();
        }
        const minute = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const seconds = Math.floor(timeDiff % 60);
        console.log(`${minute.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
// // #!/usr/bin/env node
// import { differenceInSeconds } from "date-fns";
// import inquirer from "inquirer";
// import chalk from "chalk";
// console.log(
//   chalk.bold.rgb(
//     204,
//     204,
//     204
//   )(`\t\t<<< ========================================================= >>> `)
// );
// console.log(
//   chalk.yellowBright.bold(
//     "\n\t\t        Welcome to BilalCode - CountDown_Timer_App\n"
//   )
// );
// console.log(
//   chalk.bold.rgb(
//     204,
//     204,
//     204
//   )(`\t\t<<< ========================================================= >>> `)
// );
// const respons = await inquirer.prompt([
//   {
//     type: "input",
//     name: "userInput",
//     message: chalk.blue.bold("Please enter the amount of seconds:"),
//     validate: (input) => {
//       const parsedInput = Number(input);
//       if (isNaN(parsedInput)) {
//         return chalk.red.bold("Please enter a valid number.");
//       } else if (parsedInput > 60 || parsedInput <= 0) {
//         return chalk.red.bold("Seconds must be between 1 and 60.");
//       } else {
//         return true;
//       }
//     },
//   },
// ]);
// let input = Number(respons.userInput);
// function startTime(val: number) {
//   const inTime = new Date().setSeconds(new Date().getSeconds() + val);
//   const intervalTime = new Date(inTime);
//   const intervalId = setInterval(() => {
//     const currentTime = new Date();
//     const timeDiff = differenceInSeconds(intervalTime, currentTime);
//     if (timeDiff <= 0) {
//       console.log(chalk.red.bold("Timer has expired"));
//       clearInterval(intervalId); // Clear the interval when the timer expires
//       process.exit();
//     }
//     const minutes = Math.floor(timeDiff / 60); // Calculate minutes correctly
//     const seconds = timeDiff % 60; // Calculate remaining seconds
//     console.log(
//       `${minutes.toString().padStart(2, "0")}:${seconds
//         .toString()
//         .padStart(2, "0")}`
//     );
//   }, 1000);
// }
// startTime(input);
