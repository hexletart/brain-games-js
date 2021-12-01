import compose from '../index.js';
import { getRandomInRange } from '../random-items.js';

export default (iterations) => {
  const primeDigit = (range) => {
    const number = getRandomInRange(2, range);
    let checker;
    for (let i = 2; i <= number / 2; i += 1) {
      checker = number % i;
      if (checker === 0) return [number, 'no'];
    }
    return [number, 'yes'];
  };

  const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const questChain = [];
  for (let i = 1; i <= iterations; i += 1) {
    questChain.push(primeDigit(100));
  }
  return compose(task, questChain);
};
