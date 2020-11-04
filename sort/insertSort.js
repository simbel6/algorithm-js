/**
 * 插入排序
 * 思想是 将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。
   插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位
 */

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
}

const arr = [3, 4, 6, 7, 2, 5, 1, 5, 9, 78, 33, 324, 8];
console.log(insertSort(arr));
