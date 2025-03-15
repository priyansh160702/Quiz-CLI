import inquirer from "inquirer";
import { questions } from "./questions.js";
import { handleAnswer } from "./helper.js";
export const questionGenerator = async () => {
  let score = 0;
  const questionList = questions();
  for (const question of questionList) {
    const answer = await inquirer.prompt({
      name: "question",
      type: "list",
      message: question.message,
      choices: question.choices,
    });
    const isCorrect = answer.question === question.correctAnswer;
    await handleAnswer(isCorrect);
    if (isCorrect) {
      score++;
    }
  }
  return score;
};
