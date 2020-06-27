#### 动态规划
思路：
1、不要人肉递归去想（想可重复解决的问题，不是一层层递归去想）
2、找到最近最简的方法，将其拆分成可重复解决的问题
3、数学归纳法

如果要人肉递归去验证，就要把递归树拿出来， 或者递归调用栈
1. 分治
```js
divide_conquer (problem, param1, param2, ...) {
  // 递归终止条件
  if (!problem) 
    pribt_reslut
    return
  // 准备数据
  data  = prepare_data(problem)
  subproblems = split_problem(problem, data)
  // 拆成子问题
  subreslut1 = divide_conquer(subproblems[0], p1, ...)
  subreslut2 = divide_conquer(subproblems[1], p1, ...)
  subreslut3 = divide_conquer(subproblems[2], p1, ...)
  ...
  // 处理逻辑并合成结果
  reslut = process_reslut(subreslut1, subreslut2, subreslut3, ...)
  // 有必要时要清除重置一些状态
}
```
2. 递归
```js
recursion (level, param1,params2, ...) {
  // 递归终结条件
  if (level > MAX_LEVEL) {
    // 处理结果
    process_result
    return 
  }
  // 处理当层逻辑 
  process(level, data...)
  // drill down 下探到下一 层， 参数标记当前处理那一层 
  recursion(level+1, p1, ...)
  // 清理当前层
}
```
3. 动态规划 （动态递推）
将一个复杂的问题分解成子问题
分治+最优子结构
关键点：动态规划 和递归或者分支 没有根本上的区别
共性： 找到重复子问题
差异性： 最优子结构、中途可以淘汰次优解

解题三步骤
  1. 分治
  2. 状态数组定义
  3. dp方程
解题思路： 自顶向下和自底向上，两种都要试试看。关键是找到dp方程
