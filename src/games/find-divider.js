import compose from '../index.js';
import { randomPlusNum } from '../random-items.js';

export default (iterations) => {
  const commonDivider = (range) => {
    const valueA = randomPlusNum(range);
    const valueB = randomPlusNum(range);
    const valuesInString = `${valueA} ${valueB}`;
    const startValue = Math.min(valueA, valueB);
    for (let i = startValue; i >= 1; i -= 1) {
      const checkA = valueA % i;
      const checkB = valueB % i;
      if (checkA === 0 && checkA === checkB) return [valuesInString, String(i)];
    }
    return [valuesInString, String(0)];
  };

  const task = 'Find the greatest common divisor of given numbers.';
  const questChain = [];
  for (let i = 1; i <= iterations; i += 1) {
    questChain.push(commonDivider(100));
  }
  return compose(task, questChain);
};
