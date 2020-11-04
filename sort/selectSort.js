/**
 * 选择排序
 * 每次循环选取一个最小的数字放到前面的有序序列中
 */

function sort(arr) {
  let minIndex = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

const arr = [3, 4, 6, 7, 2, 5, 5, 9, 78, 33, 324, 54];
console.log(sort(arr));
