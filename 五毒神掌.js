var inorderTraversal = function(root) {
  // 递归遍历法
  // const ans = []
  // function findVal(root) {
  //   if (root) {
  //     if (root.left) {
  //       findVal(root.left)
  //     }
  //     ans.push(root.val)
  //     if (root.right) {
  //       findVal(root.right)
  //     }
  //   }
  // }
  // findVal(root)
  // return ans
  // 颜色标记迭代法, 灰色代表已走过，白色代表未走过，推入栈, 数组遇到stack.pop的是灰色的就是push进去
  const ans = []
  if (!root) return ans
  const stack = [
    {
      color: 'white',
      node: root
    }
  ]
  while (stack.length > 0) {
    const pickValue = stack.pop()
    const { color, node } = pickValue
    if (color === 'gray') {
      ans.push(pickValue)
    } else {
      node.right && (stack.push({color: 'white', node: node.right}))
      stack.push({color: 'gray', node: node})
      node.left && (stack.push({color: 'white', node: node.left}))
    }
  }
  return ans
  // 栈
}

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