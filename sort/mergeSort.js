/**
 * 归并排序
 */

function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
    console.log("当前arr", arr);
  }
}

function merge(arr, left, mid, right) {
  let temp = [];
  let leftIndex = left;
  let rightIndex = mid + 1;
  let tempIndex = 0;
  while (leftIndex <= mid && rightIndex <= right) {
    temp[tempIndex++] =
      arr[leftIndex] < arr[rightIndex] ? arr[leftIndex++] : arr[rightIndex++];
  }

  while (leftIndex <= mid) {
    temp[tempIndex++] = arr[leftIndex++];
  }

  while (rightIndex <= right) {
    temp[tempIndex++] = arr[rightIndex++];
  }
  tempIndex = 0;
  for (let i = left; i <= right; i++) {
    arr[i] = temp[tempIndex++];
  }
}

const arr = [4, 2, 5, 7, 9, 6, 23, 45, 12];
mergeSort(arr, 0, arr.length - 1);
console.log("res", arr.join(","));
