/**
 * 爬楼梯问题   递归
 */
console.time()
const cache = {};

function climb(n) {
    
  if (n === 1) return 1;
  if (n === 2) return 2;
//   if (cache[n]) {
//     return cache[n];
//   }
  const res = climb(n - 1) + climb(n - 2);
//   cache[n] = res;
  return res;
}


console.log("4层", climb(4));
console.log('cache', cache)
console.timeEnd()
