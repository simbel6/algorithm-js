/**
 * 922. 按奇偶排序数组 II
 */

// function sortArrayByParityII(A) {
//   let arr = [[], []];
//   A.forEach((a) => arr[a % 2].push(a));
//   return A.map((a, i) => arr[i % 2].pop());
// }

function sortArrayByParityII(A) {
  for (let i = 0, j = 1; i < A.length; i += 2) {
    // 1.如果为偶数，则进入下一次循环，检查下一个偶数下标的值是否为偶数
    // 2.如果非偶数，就找到一个奇数下标的值为偶数来交换
    if ((A[i] & 1) !== 0) {
      // 偶数位出现不为偶数，说明奇数位肯定能找到偶数
      // 跳过奇数，找到一个奇数位为偶数值的下标
      while ((A[j] & 1) !== 0) {
        j += 2;
      }
      //   奇数位找到偶数了，将偶数位的奇数和奇数位的偶数的值交换
      [A[i], A[j]] = [A[j], A[i]];
    }
  }
  return A;
}

export default sortArrayByParityII;
