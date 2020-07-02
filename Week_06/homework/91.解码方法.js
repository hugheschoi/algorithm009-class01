/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  /**
   *  1、分治 拿到前面的数量 + 1  或者  后两位的解法数量 + 之前的数量
   *  2、定义状态数组 dp[n]：下标0~n 为多少种组合
   *  3、dp方程
   *  if (Number(s[i-1] +  s[i] ) <= 26) {
   *    dp[n] = dp[n-1]+dp[n-2]
   *  } else {
   *    dp[n] = dp[n-1]
   * }
   *  分析问题： 其实就是找出数字在0~26中的有几种组合情况
   */
  if (s[0] === '0') return 0
  const len = s.length;
  let dp = Array(len + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2;  i <= len; i++) {
    let value = Number(s[i-2] +  s[i-1])
    if (s[i-1] === '0' || s[i - 2] === '0') {
      if (value <= 26 && value > 0) {
        dp[i] = s[i-1] === '0' ? dp[i-2] : dp[i-1]
      } else {
        dp[i] = 0
      }  
    } else {
      dp[i] = value <= 26 ? (dp[i-1]+ dp[i-2]) : dp[i-1]
    }
  }
  return dp[len]
};
// @lc code=end
// 网上的几种解法
var numDecodings = function(s) {

}