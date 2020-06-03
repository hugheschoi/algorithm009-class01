/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 思路：首先写出左括号和右括号不管合不合法能生成几种
// var generateParenthesis = function(n) {
//     _generate(0, 2*n, '')
// };
// function _generate (level, max, s) {
//   // 终结条件
//   if (level >= max) {
//     console.log(s)
//     return
//   }
//   // 处理当前层的逻辑
//   // 生成左括号和右括号
//   // 进入下一层
//   // 遍历生成左括号
//   _generate(level + 1, max, s + '(')
//   _generate(level + 1, max, s + ')')
//   // 清理当前层的变量
// }
// generateParenthesis(1)
var generateParenthesis = function(n) {
  const ans = []
  _generate(0, 0, n, '', ans)
  return ans
}
function _generate (left, right, n, s, ans) {
  if (left === n && right === n) {
    ans.push(s)
    return
  }
  if (left < n) {
    _generate(left + 1, right, n, s + '(', ans)
  }
  if (left > right) {
    _generate(left, right + 1, n, s + ')', ans)
  }
}
console.log(generateParenthesis(3))
// @lc code=end

