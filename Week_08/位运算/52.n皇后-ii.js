/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let size = (1 << n) - 1
  let count = 0
  var solve = function(row, ld, rd) {
    if (row === size) {
      count ++
      return
    }
    let pos = size & (~(row | ld | rd))
    while (pos !== 0) {
      let p = pos & (-pos) // X&-X=>得到最低位的 1
      pos &= pos - 1 // pos &= pos - 1 清除最低位的1
      solve(row | p, (ld | p) << 1, (rd | p) >> 1)
    }
  }
  solve(0, 0, 0)
  return count
};
// @lc code=end

