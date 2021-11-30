export const randomNum = (border) => Math.floor(Math.random() * (border * 2) - border);

export const randomPlusNum = (border) => Math.floor(Math.random() * border);

export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const randomOper = () => {
  const operators = ['+', '-', '*'];
  const pointer = Math.floor(Math.random() * 3);
  return operators[pointer];
};
