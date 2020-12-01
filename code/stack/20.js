/**
 * 20. 有效的括号
 */
function isValid(s) {
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack = [];
  for (let n of s) {
    if (!map[n]) {
      stack.push(n);
    } else if (stack.length === 0 || stack.pop() !== map[n]) {
      return false;
    }
  }
  return !stack.length;
}

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([)]"))