/**
 * 682.棒球比赛
 */

function calPoints(ops) {
  let res = [];
  let pre1, pre2;
  ops.forEach((i) => {
    switch (i) {
      case "+":
        pre1 = res.pop();
        pre2 = res.pop();
        res.push(pre2, pre1, pre2 + pre1);
        break;
      case "C":
        res.pop();
        break;
      case "D":
        pre1 = res.pop();
        res.push(pre1, pre1 * 2);
        break;
      default:
        res.push(+i);
    }
  });
  return res.reduce((t, n) => t + n, 0);
}

const ops = ["5", "2", "C", "D", "+"];
console.log(calPoints(ops));

const ops2 = ["5", "-2", "4", "C", "D", "9", "+", "+"];
console.log(calPoints(ops2));
