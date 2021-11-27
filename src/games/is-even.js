import compose from '../index.js';

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const links = [[15, 'no'], [6, 'yes'], [7, 'no']];
  return compose(task, links);
};
