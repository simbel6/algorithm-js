/**
 * 归并排序
 * 分割： 将数组从中点进行分割，分为左、右两个数组，递归分割左、右数组，直到数组长度小于2
 * 归并： 如果需要合并，那么左右两数组已经有序了。
         创建一个临时存储数组temp，比较两数组第一个元素，将较小的元素加入临时数组
         若左右数组有一个为空，那么此时另一个数组一定大于temp中的所有元素，直接将其所有元素加入temp
 */

function merge(arr, left, mid, right) {
  let [temp, leftIdx, rightIdx, tempIdx] = [[], left, mid + 1, 0];
  while (leftIdx <= mid && rightIdx <= right) {
    temp[tempIdx++] =
      arr[leftIdx] < arr[rightIdx] ? arr[leftIdx++] : arr[rightIdx++];
  }
  while (leftIdx <= mid) {
    temp[tempIdx++] = arr[leftIdx++];
  }
  while (rightIdx <= right) {
    temp[tempIdx++] = arr[rightIdx++];
  }

  tempIdx = 0;
  for (let i = left; i <= right; i++) {
    arr[i] = temp[tempIdx++];
  }
}

function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
    console.log("当前arr", arr);
  }
}

const arr = [3, 2, 5, 7, 4, 8, 45, 12, 3];
mergeSort(arr, 0, arr.length - 1);
console.log("arr", arr);
