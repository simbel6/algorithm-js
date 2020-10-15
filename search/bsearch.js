/**
 * 二分法查找
 */

// 循环查找
function bsearch(arr, value) {
  let low = 0,
    high = arr.length - 1;
  let mid;
  while (low < high) {
    mid = ~~((low + high) / 2);
    if (arr[mid] === value) {
      return mid;
    }
    if (arr[mid] > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

//递归实现
function bsearch1(arr, value, low, high) {
  if (low > high) {
    return -1;
  }
  let mid = ~~((low + high) / 2);
  if (arr[mid] === value) {
    return mid;
  }
  if (value > arr[mid]) {
    return bsearch1(arr, value, mid + 1, high);
  } else {
    return bsearch1(arr, value, low, mid - 1);
  }
}

// 查找第一个值等于给定值的元素
function searchV(arr, value) {
  let low = 0,
    high = arr.length - 1;
  while (low < high) {
    mid = low + ((high - low) >> 1);
    if (value < arr[mid]) {
      high = mid - 1;
    } else if (value > arr[mid]) {
      low = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] !== value) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

// 查找最后一个值等于给定值的元素
function searchV2(arr, value) {
  let low = 0,
    high = arr.length - 1,
    mid;
  while (low <= high) {
    mid = low + ((high - low) >> 1);
    if (value < arr[mid]) {
      high = mid - 1;
    } else if (value > arr[mid]) {
      low = mid + 1;
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] !== value) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
}

// 查找第一个大于等于给定值的元素
function searchB(arr, value) {
  let low = 0,
    high = arr.length - 1,
    mid;
  while (low <= high) {
    mid = low + ((high - low) >> 1);
    if (arr[mid] >= value) {
      if (mid === 0 || arr[mid - 1] < value) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// 查找最后一个小于等于给定值的元素
function searchL(arr, value) {
  let low = 0,
    high = arr.length - 1,
    mid;
  while (low <= high) {
    mid = low + ((high - low) >> 1);
    if (arr[mid] <= value) {
      if (mid === arr.length - 1 || arr[mid + 1] > value) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const arr = [1, 3, 5, 6, 7, 8, 8, 8, 8, 9];
console.log("search", searchL(arr, 8));
// console.log("bsearch", bsearch1(arr, 8, 0, arr.length - 1));
