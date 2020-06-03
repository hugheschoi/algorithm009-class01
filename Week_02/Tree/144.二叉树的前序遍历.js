/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  // const ans = []
  // if (!root) return ans
  // function findVal(root) {
  //     if (root) {
  //         ans.push(root.val)
  //         if (root.left) {
  //             findVal(root.left)
  //         }
  //         if (root.right) {
  //             findVal(root.right)
  //         }
  //     }
  // }
  // findVal(root)
  // return ans
  const ans = []
  if (!root) return ans
  const stack = []
  let cur = root
  while(cur || stack.length) {
      if (cur) {
          ans.push(cur.val)
          stack.push(cur)
          cur = cur.left
      } else {
          let node = stack.pop()
          cur = node.right
      }
  }
  return ans
};
// @lc code=end

