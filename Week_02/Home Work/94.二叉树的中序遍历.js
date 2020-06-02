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
    /*
        模板
        标记颜色实际上是设置一个入栈的条件， 递归本身就是函数调用栈，利用栈实现类似的调用栈
        声明一个ans， 一个stack
        stack塞入默认值
        while (stack.length > 0) {
        const item = stack.pop(), // 弹出，此时如果不塞入，stack将继续弹出上一个值
        if (color==='gray') { // 达到某个条件后，就把stack弹出的值放入ans中
            ans.push(item)
        } else {
            stack.push({}) // 不满足条件，往栈里再塞入新值
        }
        }
    */
    /*
        const printArr = []
        if (!root) return printArr
        const stack = []
        stack.push({
            color: 'white',
            node: root
        })
        while (stack.length > 0) {
            const pickValue = stack.pop()
            const {	color, node } = pickValue
            if (color === 'gray') {
                printArr.push(node.val)
            } else {
                node.right && stack.push({color: 'white', node: node.right})
                stack.push({color: 'gray', node})
                node.left && stack.push({color: 'white', node:node.left})
            }
        }
        return printArr
    */
    /* 除了颜色以外也可以用true和false标记 写法优化一下 */
    /*
        var inorderTraversal = function (root) {
            const ans = []
            if (!root) return ans
            const stack = [[root, false]]
            while (stack.length > 0) {
            const pickValue = stack.pop()
            const node = pickValue[0]
            if (pickValue[1]) {
                ans.push(node.val)
            } else {
                node.right && stack.push([node.right, false])
                stack.push([node, true])
                node.left && stack.push([node.left, false])
            }
            }
            return ans
        }
    */
    // return printArr, stack每次只
    // 中序遍历树 当节点仍然存在 或 栈还不为空 时， 如果节点存在，把节点推入栈，节点变为该节点的左节点。 
    // 如果节点不存在了就拿到其父节点（stack.pop()）,并把值推入结果，然后把接着右子节点遍历
    var inorderTraversal = function(root) {
        const res = []
        if (!root) return res
        const stack = []
        let curr = root
        while(curr != null || stack.length > 0) {
            if (curr) {
                stack.push(curr)
                curr = curr.left
            } else {
                let node = stack.pop()
                res.push(node.val)
                curr = node.right
            }
        }
        return res
    }
};
// @lc code=end

