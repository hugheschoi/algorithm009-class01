学习笔记
### 递归
#### 递归的调用模板
```python
  def recursion (level, params1, params2, ...):
    # recursion termitor 递归终结条件
    if level > MAX_LEVEL:
      process_result
      return 
    # process logic in current level 处理当层逻辑 
    process(level, data...)
    # drill down 下探到下一 层， 参数标记当前处理那一层 
    self.recursion(level+1, p1, ...)
    # 清理当前层
```
#### 思维要点
1、不要人肉进行递归（最大误区）
2、找到最近最简的方法，将其拆解成可重复解决的问题（重复子问题 ）
3、数学归纳法的思维 

#### 实战-括号生成
```javascript
// 思路：首先写出左括号和右括号不管合不合法能生成几种
var generateParenthesis = function(n) {
  _generate(0, 2*n, '')
  return null
};
function _generate (level, MAX, s) {
  // 终结条件
  if (level >= MAX) {
    console.log(s)
    return
  }
  // 处理逻辑
  let s1 = s + '('
  let s2 = s + ')'
  // 进入下一层
  _generate(level + 1, MAX, s1)
  _generate(level + 1, MAX, s2)
  // 清除
}
generateParenthesis(3) // 把所有组合都打印了出来
// 现在想想有效的条件： 左括号不得超过n，右括号前面必须有个左括号，
// left < n 左括号随时加，只要不要超过总数
// left > right 前面必须有左括号，右括号才能加
var generateParenthesis = function(n) {
  _generate(0, 0, n, '')
  return null
};
function _generate (left, right, n, s) {
  // 终结条件
  if (left === n && right === n) {
    console.log(s)
    return
  }
  // 处理逻辑
  // let s1 = s + '('
  // let s2 = s + ')'
  // 进入下一层
  if (left < n) {
    _generate(left + 1, right, n, s + '(')
  }
  if (left > right) {
    _generate(left, right + 1, n, s + ')')
  }
  // 清除
}
generateParenthesis(3)
```
#### 分治和回溯
分治和回溯是递归的一种写法，特殊的递归。关键的是找到重复性。

分治：将问题划分成多个子问题
```python
def divide:
  # terminator
  if problem is Node:
  return
  # prepare data
  
  # drill down conquer subproblems，走到下一层并拆分子问题
  subresult1 = divide(0)
  subresult2 = divide(1)

  # generate final result 合并子问题
  result
```
回溯：不断在每一层上去试，一个一个试，错了就返回到上一步ß

