/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * 中序遍历 left=>root=>right,遍历事先找左子树，再到根，最后到右子树
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // 题解1: 递归遍历，树的结构用递归合适，递归的条件就是中序遍历的规则
    // var res = []
    // function findVal (tree) {
    //     if (tree) {
    //         if (tree.left) {
    //             findVal(tree.left)
    //         }
    //         res.push(tree.val)
    //         if (tree.right) {
    //             findVal(tree.right)
    //         }
    //     }
    // }
    // findVal(root)
    // return res
    
    // 题解二，颜色标记法, 按照中序的规则遍历，记录灰色是访问过的，白色是未访问过的，维护一个栈，标记这些节点，当遇到灰节点答案就push
    // const printArr = []
	// if (!root) return printArr
	// const stack = []
	// stack.push({
	// 	color: 'white',
	// 	node: root
	// })
	// while (stack.length > 0) {
	// 	const pickValue = stack.pop()
	// 	const {	color, node } = pickValue
	// 	if (color === 'gray') {
	// 		printArr.push(node.val)
	// 	} else {
	// 		node.right && stack.push({color: 'white', node: node.right})
	// 		stack.push({color: 'gray', node})
	// 		node.left && stack.push({color: 'white', node:node.left})
	// 	}
	// }
    // return printArr, stack每次只
    // 题解三， 利用栈
    let res = [], stack = []
    while (root || stack.length) {
        if (root.left) {
            stack.push(root)
            root = root.left
        } else if (!root.left && !root.right) {
            res.push(root.val)
            root = stack.pop()
            root && (root.left = null)
        } else if (root.right) {
            root = root.right
        }
    }
    return res
};
// 中序遍历
var inorderTraversal = function(root) {
    const stack = []
    const res = []
    let curr = root
    while (curr !== null || stack.length) {
        if (curr !== null) {
            stack.push(curr)
            curr = curr.left
        } else {
            curr = stack.pop()
            res.push(curr.val)
            curr = curr.right
        }
        // while (curr !== null) {
        // 	stack.push(curr)
        // 	curr = curr.left
        // }
        // curr = stack.pop()
        // res.push(curr.val)
        // curr = curr.right
    }
    return res
}
// @lc code=end

