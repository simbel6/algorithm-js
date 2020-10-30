/**
 * 电话号码的字母组合
 */

function letterCombinations(digits) {
  if (!digits) {
    return [];
  }
  const letArr = [ "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz", ];
  if (digits.length === 1) {
    return letArr[digits] ? letArr[digits].split("") : [];
  }
  const numArr = digits.split("");
  const mapArr = [];
  numArr.forEach((num) => {
    if (letArr[num]) {
      mapArr.push(letArr[num]);
    }
  });
  const comb = (arr) => {
    let temp = [];
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    arr.splice(0, 2, temp);
    if (arr.length > 1) {
      comb(arr);
    }
    return arr;
  };

  return comb(mapArr)[0];
}

export default letterCombinations;
