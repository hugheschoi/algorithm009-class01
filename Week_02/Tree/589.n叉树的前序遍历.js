/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const ans = []
  if (!root) return ans
  function findVal (root) {
      if (root) {
          ans.push(root.val)
          if (root.children) {
              root.children.forEach(item => {
                  findVal(item)
              })
          }
      }
  }
  findVal(root)
  return ans
};

// @lc code=end

