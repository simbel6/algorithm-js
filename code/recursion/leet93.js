function restoreIpAddresses(s) {
  let res = [];

  function dfs(sub, idx) {
    if (sub.length === 4 && idx === s.length) {
      res.push(sub.join("."));
      return;
    }
    if (sub.length === 4 && idx < s.length) {
      return;
    }
    for (let len = 1; len < 4; len++) {
      if (idx + len - 1 >= s.length) {
        return;
      }
      if (len !== 1 && s[idx] === "0") {
        return;
      }
      const str = s.substring(idx, idx + len);
      if (len === 3 && +str > 255) {
        return;
      }
      sub.push(str);
      dfs(sub, idx + len);
      sub.pop();
    }
  }

  dfs([], 0);
  return res;
}

export default restoreIpAddresses;

// const s = "101023";
// console.log("restoreIpAddresses", restoreIpAddresses(s));
