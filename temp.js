function bubbleSort(list) {
  for (let i = 0; i < list.length; i++) {
    let isSorted = true;
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        [list[j + 1], list[j]] = [list[j], list[j + 1]];
        isSorted = false;
      }
    }
    if (isSorted) break;
  }
  return list;
}

let arr = Array.from({ length: 20 }, () => (Math.random() * 10) | 0);
console.log("arr", arr);
console.log("sort", bubbleSort(arr));
