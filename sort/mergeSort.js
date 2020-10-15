/**
 * 归并排序
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
