/**
 * 52. N皇后2
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let cols = new Set();
  let left = new Set();
  let right = new Set();
  let result = [];
  valid(0, n, cols, left, right, result, []);
  return result.length;
};

function valid(row, n, cols, left, right, result, temp) {
  if (row === n) {
    result.push([...temp]);
    temp = [];
  }

  for (let i = 0; i < n; i++) {
    if (cols.has(i) || left.has(row + i) || right.has(row - i)) {
      continue;
    }
    cols.add(i);
    left.add(row + i);
    right.add(row - i);
    temp[row] = i;
    valid(row + 1, n, cols, left, right, result, temp);

    cols.delete(i);
    left.delete(row + i);
    right.delete(row - i);
  }
}
