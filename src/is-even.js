import readlineSync from 'readline-sync';

export default (user) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const links = [[15, 'no'], [6, 'yes'], [7, 'no']];
  for (let i = 0; i < links.length; i += 1) {
    console.log(`Question: ${links[i][0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== links[i][1]) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${links[i][1]}'.
Let's try again, ${user}!`);
    }
  }
  return console.log(`Congratulations, ${user}!`);
};
