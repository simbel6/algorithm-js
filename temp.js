function partition(arr, l, r) {
  let pivot = arr[l];
  while (l < r) {
    while (l < r && arr[r] >= pivot) {
      r--;
    }
    arr[l] = arr[r];
    while (l < r && arr[l] < pivot) {
      l++;
    }
    arr[r] = arr[l];
  }
  arr[l] = pivot;
  return l;
}

function sort(arr, left, right) {
  if (left < right) {
    let p = partition(arr, left, right);
    sort(arr, left, p);
    sort(arr, p + 1, right);
  }
  return arr;
}

let arr = Array.from({ length: 20 }, () => (Math.random() * 10) | 0);
console.log("arr", arr);
console.log("sort", sort(arr, 0, arr.length - 1));
