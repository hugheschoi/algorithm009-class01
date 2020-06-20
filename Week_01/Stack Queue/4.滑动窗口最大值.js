/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  // let n = nums.length
// if (n === 0) return []
// let res = []
// for (let i = 0; i< nums.length; i++) {
// 	let max= Number.MIN_SAFE_INTEFER
// 	for (let j = i; j < i+ k; j++) {
// 		max = Math.max(nums[j], max)
// 	}
// 	res.push(max)
// }
// return res
  /*
[1  3  -1] -3  5  3  6  7       3  win [3 -1] 		ans.push(3)
1 [3  -1  -3] 5  3  6  7       3  win [3, -1, -3] 	ans [3, 3]
1  3 [-1  -3  5] 3  6  7       5  win [5]  		ans [3,3,5]
1  3  -1 [-3  5  3] 6  7       5  win [5, 3].      ans [3,3,5,5]
1  3  -1  -3 [5  3  6] 7       6. win [6]			ans [3,3,5,5,6]
1  3  -1  -3  5 [3  6  7]      7  win [7]			ans [3,3,5,5,6,7
所有滑动窗口用队列就好了
*/
  const ans = []
  const win = []
  for (let i = 0; i < nums.length; i++) {
      if (i - win[0] >= k) {
          win.shift()
      }
      while(nums[win[win.length - 1]] <= nums[i]) {
          win.pop()
      }
      win.push(i)
      if (i >= k - 1) {
          ans.push(nums[win[0]])
      }
  }
  return ans
};