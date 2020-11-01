/**
 * 459. 重复的子字符串
 * 解法一：利用正则捕获组
   解法二：假设字符串由 n 个相同子串组成, 掐头去尾后包含子串 2n - 2, 如果仍然包含原字符串 2n - 2 > n, 解出 n > 2
 */
export default (s) => {
    return /^(\w+)\1+$/.test(s)
    // return (s + s).slice(1, -1).includes(s)
}