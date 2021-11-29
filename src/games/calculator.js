import compose from '../index.js';
import { randomNum, randomOper } from '../random-items.js';

export default (iterations) => {
  const expression = (range) => {
    let result;
    const valueA = randomNum(range);
    const valueB = randomNum(range);
    const sign = randomOper();
    const exprInString = `${valueA} ${sign} ${valueB}`;
    switch (sign) {
      case '+':
        result = valueA + valueB;
        break;
      case '-':
        result = valueA - valueB;
        break;
      case '*':
        result = valueA * valueB;
        break;
      default:
        result = null;
    }
    return [exprInString, String(result)];
  };

  const task = 'What is the result of the expression?';
  const questChain = [];
  for (let i = 1; i <= iterations; i += 1) {
    questChain.push(expression(100));
  }
  return compose(task, questChain);
};
