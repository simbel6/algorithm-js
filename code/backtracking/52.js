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

// 位运算解法

const totalNQueens = function (n) {
  if (n < 1) return [];
  let count = 0;

  dfs(0, n, 0, 0, 0);

  function dfs(row, n, cols, left, right) {
    if (row >= n) {
      count++;
      return;
    }
    // 得到当前所有的空位
    let bits = ~(cols | left | right) & ((1 << n) - 1);
    while (bits) {
      // 取到最低位的1
      let p = bits & -bits;
      dfs(row + 1, n, cols | p, (left | p) << 1, (right | p) >> 1);
      // 去掉最低位的1
      bits = bits & (bits - 1);
    }
  }
};
