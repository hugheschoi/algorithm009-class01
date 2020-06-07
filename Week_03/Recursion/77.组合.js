/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 2: 2
 * 3: 2 * 3 
 * 4: 6 * 4
 * [1,2,3] [1,2] [1,2][2,1]
 * [
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
[1,2,3,4],
[1,2,4,3],
[1,4,2,3],
[1,4,3,2],
[1,3,4,2]
[1,3,2,4]
 */
var permute = function(nums) {
  const ans = []
  const arr = []
  function helper (s, nums) {
      // 终结
      if (arr.length === nums.length) {
          console.log(arr)
          return
      }
      for (let i = s; i < nums.length; i++) {
          arr.push(nums[i])
          helper(s + 1, nums)
      }
  }
  helper(0, nums)
  return ans
};
// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// var combine = function(n, k) {
// 	var res = []
// 	var subres = []
// 	function combineSub(start, subres) {
// 		if (subres.length === k) {
// 			res.push(subres.slice(0))
// 			return
// 		}
// 		for (let i = start; i<=n;i++) {
// 			subres.push(i)
// 			combineSub(i+1,subres)
// 			subres.pop()
// 		}
// 	}
// 	combineSub(1,subres)
// 	return res
// }
// @lc code=end

