/**
 * 
 * 输入: "00110011"
输出: 6
解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
 */
function countBinarySubstrings(s) {
  let count = 0;
  let arr = s.match(/0+|1+/g);
  for (let i = 0; i < arr.length - 1; i++) {
    count += Math.min(arr[i].length, arr[i + 1].length);
  }
  return count;
}

export default countBinarySubstrings;
