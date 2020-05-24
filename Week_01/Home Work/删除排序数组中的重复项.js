/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 题解1：双指针，把不重复的放在前面，i指向的是最后一个不重复的下标，遍历移动j，当nums[i]与nums[j]不相等的时候，往后移动i，并赋上j的值
var removeDuplicates = function (nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
};
// @lc code=end

