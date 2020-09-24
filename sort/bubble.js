function sort(list) {
  let times = 0;
  let border = list.length - 1;
  let lastIndex = 0;
  for (let i = 0; i < list.length - 1; i++) {
    let isSorted = true;

    for (let j = 0; j < border - i; j++) {
      times++;
      if (list[j] > list[j + 1]) {
        // let temp = list[j + 1];
        // list[j + 1] = list[j];
        // list[j] = temp;
        [list[j + 1], list[j]] = [list[j], list[j + 1]];
        isSorted = false;
        lastIndex = j;
        console.log("list", list.join());
      }
    }
    // border = lastIndex;
    if (isSorted) break;
  }
  console.log("times", times);
  return list;
}

const list = [2, 1, 9, 4, 3, 6, 7, 4, 23];
console.log(sort(list));
