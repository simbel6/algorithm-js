/**
 * 36. 有效的数独
 */

var isValidSudoku = function (board) {
  // 行、列、和子数独判重
  let cols = ,
    rows = {},
    subBoard = {};
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num !== ".") {
        // 判断当前数值在第几个子数独
        let subIndex = ~~(i / 3) * 3 + ~~(j / 3);
        if (
          cols[i + "-" + num] ||
          rows[j + "-" + num] ||
          subBoard[subIndex + "-" + num]
        ) {
          return false;
        }
        cols[i + "-" + num] = true;
        rows[j + "-" + num] = true;
        subBoard[subIndex + "-" + num] = true;
      }
    }
  }
  return true;
};
