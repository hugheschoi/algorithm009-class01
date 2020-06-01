/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  // 解法一： 暴力法，看排序后是否相等
  // return s.split('').sort().join('') === t.split('').sort().join('')
  // 解法二： hash表，字母有26位，创建一个长度为26，装满0的数组，
  // const arr = new Array(26).fill(0)
  // const charCodeStart = 'a'.charCodeAt()
  // for (let i = 0; i < s.length; i++) {
  //   arr[s[i].charCodeAt() - charCodeStart]++
  // }
  // for (let j = 0; j < t.length; j++) {
  //   arr[t[j].charCodeAt() - charCodeStart]--
  //   if (arr[t[j].charCodeAt() - charCodeStart] < 0) {
  //     return false
  //   }
  // }
  // return true
  // 哈希消减法，维护一个对象即可
  const map = {}
  for (let n of s) {
    map[n] = map[n] === undefined ? 1 : ++map[n]
  }
  for (let n of t) {
    if (map[n] === undefined) return false
    if (--map[n] < 0) return false
  }
  return true
};
// @lc code=end

