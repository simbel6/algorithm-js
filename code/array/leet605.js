/**
 * 605. 种花问题
 * 判断 当前为0 前后也不为1 则可以种花
 */

export default (flowerbed, n) => {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      count++;
      i++;
    }
    if (count >= n) {
      return true;
    }
  }
  return false;
};
