/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  /* 
   * 题解1：将异位词排好序，作为异位词相同的key，再用map
   * 一层遍历，加上sort，时间复杂度是On2. 对数组操作频繁不是太好
   */
  // const map = new Map()
  // for (let i = 0; i < strs.length; i++) {
  //   let key = strs[i].split('').sort().join('')
  //   if (map.has(key)) {
      // let value = map.get(key)
      // value.push(strs[i])
      // map.set(key, value)
  //   } else {
  //     map.set(key, [strs[i]])
  //   }
  // }
  // // const ans = []
  // // for (const value of map.values()) {
  // //   ans.push(value)
  // // }
  // // return ans
  // return [...map.values()]
  /**
   *  题解二：计数法， 数组记下code值出现的次数，再join成key
   */
  const map = new Map()
  for (let i = 0; i < strs.length; i++) {
      let arr = Array(26).fill(0)
      for (let j = 0; j < strs[i].length; j++) {
        arr[strs[i].charCodeAt(j) - 97]++        
      }
      let key = arr.join()
      if (map.has(key)) {
        let value = map.get(key)
        value.push(strs[i])
        map.set(key, value)
      } else {
        map.set(key, [strs[i]])
      }
  }
  return [...map.values()]
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
// @lc code=end
