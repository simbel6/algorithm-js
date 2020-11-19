/**
 * 242. 有效的字母异位词
 */

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map = Array(26).fill(0);
  let code = "a".charCodeAt();
  for (let i = 0; i < s.length; i++) {
    map[s[i].charCodeAt() - code]++;
    map[t[i].charCodeAt() - code]--;
  }
  return !map.some((c) => c !== 0);
}
