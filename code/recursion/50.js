/**
 * 50. Pow(x, n)
 */

// 递归
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  return n % 2 ? x * myPow(x, n - 1) : myPow(x * x, n / 2);
};

// 不用递归
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let pow = 1;
  while (n) {
    if (n % 2) {
      pow = pow * x;
    }
    x *= x;
    n >>>= 1;
  }
  return pow;
};

console.log(myPow(20000, -2));
