#!/usr/bin/env node
import chalk from "chalk"; //Colors the output text in the terminal
import chalkAnimation from "chalk-animation"; // Built on top of Chalk and animates the text in the terminal
import inquirer from "inquirer"; // For collecting User input
import gradient from "gradient-string";
import figlet from "figlet";
import { sleep } from "./helper";
import { questionGenerator } from "./question-generator";

let playerName: string;

// Welcome
const welcome = async () => {
  const title = chalkAnimation.neon("Welcome to the Quiz!");

  await sleep(3500);
  title.stop();

  console.log(`
        ${chalk.bgBlue("How to Play?")}
        
        Just answer all questions correctly and you are good!
        If you get any question wrong, the quiz will be ${chalk.bgRed("OVER")}
        Try to answer all questions correctly.
    `);
};

// Ask player name
const askPlayerName = async () => {
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "Enter your name",
    default() {
      return "Player";
    },
  });

  playerName = answers.player_name;
};

const startQuiz = async () => {
  await welcome();
  await askPlayerName();

  let playAgain: boolean;

  do {
    const score = await questionGenerator();

    console.log(chalk.bgGreen(`${playerName}, your score was ${score}`));

    const answer = await inquirer.prompt({
      name: "playAgain",
      type: "confirm",
      message: "Do you want to play again?",
    });

    playAgain = answer.playAgain;
  } while (playAgain);

  process.exit(1);
};

await startQuiz();
