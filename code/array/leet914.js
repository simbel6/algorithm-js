/**
 * 914. 卡牌分组
 */

export default (deck) => {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const map = new Map();
  deck.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  const counts = [...map.values()];
  let g = counts[0];
  counts.forEach((c) => {
    g = gcd(g, c);
  });
  return g >= 2;
};
