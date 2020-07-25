# 高级动态规划
动态规划：
1. 状态转移方程
2. 重复性，找到最优子结构

递归、分治：
递归模板：
```js
function recur (level, params) {
  // terminator 
  if (level > MAX_LEVEL) {
    // process reslut
    return;
  }

  // process current logic
  process(level, param);
  // drill down
  recur(level: level + 1, newParam);
  // restore current status
}
```
分治： 拆分结合递归，结果合成
```js
function divide_conquer(problem, param1, param2, ...){
  // recursion terminator
  if problem is None:
      print_result
  return
    // prepare data
  data = prepare_data(problem)
  subproblems = split_problem(problem, data)
    // conquer subproblems
  subresult1 = self.divide_conquer(subproblems[0], p1, ...)
  subresult2 = self.divide_conquer(subproblems[1], p1, ...)
  subresult3 = self.divide_conquer(subproblems[2], p1, ...)
  ...
    // process and generate the final result
  result = process_result(subresult1, subresult2, subresult3, ...) // revert the current level states
}
```
 感触
1. 人肉递归低效、很累
2. 找到最近最简方法，将其拆解成可重复解决的问题 
3. 数学归纳法思维
本质:寻找重复性 —> 计算机指令集

当分而治之叫上记忆化的缓存的话，就过渡到动态规划

动态规划 Dynamic Programming
1. “Simplifying a complicated problem by breaking it down into simpler sub-problems”
(in a recursive manner)
2. Divide & Conquer + Optimal substructure 分治 + 最优子结构
3. 顺推形式: 动态递推

DP顺推模板
```python
function DP():
  dp = [][] # 二维情况
  for i = 0 .. M {
    for j = 0 .. N {
      dp[i][j] = _Function(dp[i’][j’]...)
    }
  }
  return dp[M][N];
```
关键点
动态规划 和 递归或者分治 没有根本上的区别(关键看有无最优的子结构) 
拥有共性:找到重复子问题
差异性:最优子结构、中途可以淘汰次优解

### 爬楼梯
```python
def f(n):
  if n <= 1: return 1
  return f(n - 1) + f(n - 2)


def f(n):
  if n <= 1: 
    return 1 
  if n not in mem:
    mem[n] = f(n - 1) + f(n - 2) # 记忆化缓存
  return mem[n]
```
最后演变成数据形式
```python
def f(n):
  dp = [1] * (n + 1)
  for i in range(2, n + 1):
    dp[i] = dp[i - 1] + dp[i - 2]
  return dp[n]
```
优化：可以不用数组，用两个变量不断的迭代
```python
def f(n):
  x, y = 1, 1
  for i in range(1, n):
    y, x = x + y, y 
  return y
```
### 

### 不同路径
递归公式:
f(x, y) = f(x-1, y) + f(x, y-1)
```py
def f(x, y):
  if x <= 0 or y <= 0: return 0
  if x == 1 and y == 1: return 1
  return f(x - 1, y) + f(x, y - 1)
  
def f(x, y):
  if x <= 0 or y <= 0: return 0
  if x == 1 and y == 1: return 1
  if (x, y) not in mem:
    mem[(x, y)] = f(x - 1, y) + f(x, y - 1)
  return mem[(x, y)]
```
最终转为dp
```py
def f(x, y):
  dp = [[0] * (m + 1) for _ in range(n + 1)] 
  dp[1][1] = 1
  for i in range(1, y + 1):
      for j in range(1, x + 1):
        dp[i][j] = dp[i - 1][j] + dp[j][i - 1]
  return dp[y][x]
```

# 字符串

## 字符串中的第一个唯一字符
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
s = "leetcode"
返回 0

s = "loveleetcode"
返回 2
题解一： 暴力法 On2
```js
var firstUniqChar = function(s) {
  if (s.length === 1) return 0
  for (let i = 0; i < s.length; i++) {
    let isUniq = false
    for (let j = 0; j < s.length; j++) {
      if (i !== j && s[i] === s[j]) {
        isUniq = true
        break
      }
    }
    if (!isUniq) {
      return i
    }
  }
  return -1
};
```
二： 用map 时间复杂度On
```js
var firstUniqChar = function(s) {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1
    } else {
      map[s[i]] ++
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i
    }
  }
  return -1
};
```




































