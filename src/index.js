/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default (descr, gameData) => {
  const name = greeting();
  console.log(descr);
  for (const roundData of gameData) {
    console.log(`Question: ${roundData[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== roundData[1]) {
      const failed = `'${answer}' is wrong answer ;(. Correct answer was '${roundData[1]}'.
Let's try again, ${name}!`;
      return console.log(failed);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};
