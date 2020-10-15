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

// 递归实现
function quickSort1(arr, l, r) {
  if (l < r) {
    let p = partition(arr, l, r);
    quickSort1(arr, l, p - 1);
    quickSort1(arr, p + 1, r);
  }
}

// 循环实现
function quickSort2(arr) {
  // 用push()和pop()函数创建一个将作为栈使用的数组
  stack = [];

  // 将整个初始数组做为“未排序的子数组”
  stack.push(0);
  stack.push(arr.length - 1);

  // 没有显式的peek()函数
  // 只要存在未排序的子数组，就重复循环
  while (stack[stack.length - 1] >= 0) {
    // 提取顶部未排序的子数组
    end = stack.pop();
    start = stack.pop();

    pivotIndex = partition(arr, start, end);

    // 如果基准的左侧有未排序的元素，
    // 则将该子数组添加到栈中，以便稍后对其进行排序
    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    // 如果基准的右侧有未排序的元素，
    // 则将该子数组添加到栈中，以便稍后对其进行排序
    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
}

const arr = [4, 7, 6, 5, 3, 2, 8, 1];

// sort(arr, 0, arr.length - 1);
quickSort2(arr, 0, arr.length - 1);
console.log("sort(arr)", arr);
