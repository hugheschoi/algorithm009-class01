/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  // let ans = 0
    // for (let i = 0; i < A.length; i++) {
    // 	for (let j = 0; j < B.length; j++) {
    // 		let k = 0
    // 		while(A[i+k] === B[j+k]) {
    // 			k++
    // 		}
    // 		ans = Math.max(ans, k)
    // 	}
    // }
    // return ans
  /**
   * 1. 分治 前一个连续的 + 当前的
   * 2. 定义状态数组 数组问题双指针 dp[i][j] 表示i,j下的 数量
   * 3. dp方程 dp[i][j] = dp[i-1][j-1] + 1
   */
  let m = A.length
  let n = B.length
  let ans = 0
  let dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = A[i - 1] === B[j - 1] ? dp[i - 1][j - 1] + 1 : 0
      ans = Math.max(ans, dp[i][j])
    }
  }
  return ans
};
// @lc code=end

