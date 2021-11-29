import compose from '../index.js';

export default (iterations) => {
  const randomNum = () => Math.floor(Math.random() * 100);

  const randomOper = () => {
    const operators = ['+', '-', '*'];
    const pointer = Math.floor(Math.random() * 3);
    return operators[pointer];
  };

  const expression = () => {
    let result;
    const valueA = randomNum();
    const valueB = randomNum();
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
    questChain.push(expression());
  }
  return compose(task, questChain);
};
