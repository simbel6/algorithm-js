/**
 * 51. N 皇后
 */

var solveNQueens = function (n) {
  const cols = new Set();
  const left = new Set();
  const right = new Set();
  const result = [];
  solveNQueensCore(0, n, cols, left, right, result, []);
  return draw(result, n);
};

var solveNQueensCore = function (row, n, cols, left, right, result, temp) {
  if (row === n) {
    result.push([...temp]);
    temp = [];
  }
  for (let i = 0; i < n; i++) {
    if (!cols.has(i) && !right.has(row - i) && !left.has(row + i)) {
      cols.add(i);
      left.add(row + i);
      right.add(row - i);
      temp[row] = i;
      solveNQueensCore(row + 1, n, cols, left, right, result, temp);
      cols.delete(i);
      left.delete(row + i);
      right.delete(row - i);
    }
  }
};

function draw(array, n) {
  const result = [];
  array.forEach((element) => {
    const panel = [];
    element.forEach((index) => {
      const temp = new Array(n).fill(".");
      temp[index] = "Q";
      panel.push(temp.join(""));
    });
    result.push(panel);
  });
  return result;
}
