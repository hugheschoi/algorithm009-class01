/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // 一直%2，如果有等于1 的就跳出循环 return false
  // 说明二进制形式，有且只有一个1, n & (n - 1) === 0
  return n > 0 && (n & (n - 1)) === 0
};
// @lc code=end

