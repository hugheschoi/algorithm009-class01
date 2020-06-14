/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 贪心条件： 只要跳到最后那个位置的，所以维护最有一个值得位置，只要从后往前能到0就可以
var canJump = function (nums) {
  if (nums === null) return false
  let end = nums.length - 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= end) {
      end = i
    }
  }
  return end === 0
};
// @lc code=end

