import compose from '../index.js';
import { randomPlusNum, getRandomInRange } from '../random-items.js';

export default (iterations) => {
  const hiddenDigit = () => {
    const result = [];
    let startingDigit = randomPlusNum(10);
    const digitsAmount = getRandomInRange(7, 12);
    const step = getRandomInRange(2, 9);
    const soughtFor = getRandomInRange(0, digitsAmount - 1);
    for (let i = 1; i <= digitsAmount; i += 1) {
      result.push(startingDigit);
      startingDigit += step;
    }
    const sought = result[soughtFor];
    result[soughtFor] = '..';
    const resultInString = result.join(' ');
    return [resultInString, sought];
  };

  const task = 'What number is missing in the progression?';
  const questChain = [];
  for (let i = 1; i <= iterations; i += 1) {
    questChain.push(hiddenDigit());
  }
  return compose(task, questChain);
};
