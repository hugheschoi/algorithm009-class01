/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  /**
   *  4   5   6   7   0   1   2   3
   *              mid
   */
  let start = 0, end = nums.length - 1;
  while (start <= end) {
    const mid = start + ((end - start) >> 1);
    if (nums[mid] === target) return mid
	// [start, mid]有序
    if (nums[mid] >= nums[start]) {
    	if (target >= nums[start] && target <= nums[mid]) {
    		end = mid - 1
    	} else {
    		// target 不在[start, mid]之间
    		start = mid + 1
    	}
    } else {
    	// [mid, end]有序
	    if (target >= nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        // target 不在 [mid, end] 之间
        end = mid - 1;
      }
    }
  }
  return -1;
};
// @lc code=end

