import { createSpinner } from "nanospinner";
// Sleep Function to wait for certain things such as animations because we can only do one thing at a time in the terminal.
export const sleep = (time) => new Promise((resolve, reject) => setTimeout(resolve, time));
// Answer Handler
export const handleAnswer = async (isCorrect) => {
    const spinner = createSpinner("Checking answer...").start();
    await sleep(500);
    if (isCorrect) {
        spinner.success({
            text: `Nice Work, it is the correct answer!`,
        });
    }
    else {
        spinner.error({ text: "Wrong answer :(" });
    }
};
