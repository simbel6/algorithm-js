/**
 * 插入排序
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
