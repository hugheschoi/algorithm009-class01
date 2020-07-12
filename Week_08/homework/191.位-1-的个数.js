/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // for loop 0->32
  // %2 , /2  %2 = 1 的话 count++
  // &1 x=x>>1
  // while (x > 0) count++  x & (x - 1)
  // let bits = 0;
  // let mask = 1;
  // for (let i = 0; i < 32; i++) {
  //   if ((n & mask) !== 0) {
  //     bits++
  //   }
  //   mask <<= 1
  // }
  // return bits
  let sum = 0
  while (n !== 0) {
    sum++
    n &= (n - 1)
  }
  return sum
};
// @lc code=end

