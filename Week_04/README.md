### 深度优先搜索、广度优先搜索
- 搜索、遍历
1. 每个节点访问一次
2. 每个节点仅仅访问一次
3. 对节点的访问顺序不同可分为，深度优先和广度优先
4. 代码模板
深度优先：
```python
# 递归写法
visited = set()
def dfs(node, visited):
    if node in visited: # terminator
    	# already visited 
    	return 
	visited.add(node) 
	# process current node here. 
	...
	for next_node in node.children(): 
		if next_node not in visited: 
			dfs(next_node, visited)

# 非递归写法
def DFS(self, tree): 
	if tree.root is None: 
		return [] 
	visited, stack = [], [tree.root]
	while stack: 
		node = stack.pop() 
		visited.add(node)
		process (node) 
		nodes = generate_related_nodes(node) 
		stack.push(nodes) 
	# other processing work 
	...
```
广度优先：
```python
#
def BFS(graph, start, end):
    visited = set()
	queue = [] 
	queue.append([start]) 
	while queue: 
		node = queue.pop() 
		visited.add(node)
		process(node) 
		nodes = generate_related_nodes(node) 
		queue.push(nodes)
	# other processing work 
	...
```
### 贪心算法Greedy 
1. 定义
贪心算法是一种在每一步选择中都采取当前状态下最好或最优解的选择，从而导致结果是全局最好或最优的算法

2. 与动态规划的区别
他对每个子问题的解决方案都作出选择，不能回退。动态规划会保存以前的计算结果，并根据以前的结果对当前进行选择，有回退功能

3. 解决的问题
贪心算法可以解决一些最优化问题，如求图中的最小生成树、求哈夫曼编码。也可以作为辅助算法。
- 解题的关键
- 1. 能证明贪心是可以扥到全局的最优解的
- 2. 可能有从后往前贪心，也可能有从某一局部切入尽心贪心

4. 适用场景
问题能分成子问题来解决，子问题的最优解能递推到最终问题的最优解，这种子问题最优解称为最优子结构


### 二分查找
- 二分查找的前提
1. 目标函数单调性（单调递增或递减）
2. 存在上下界（bound）
3. 能够通过索引访问

- 代码模板
```python
left,right=0,len(array)-1
while left <= right:
  mid = (left + right) / 2
  if (array[mid] == target) {
    #find the target!
    break or return result
  }
  elif array[mid] < target:
    left = mid + 1
  else:
    right = mid - 1
```
夹逼的过程，并且排除一半.
- 思考题： 使用二分查找，寻找一个半有序数组```[4,5,6,7,0,1,2]```中间无序的地方
```javascript
// 我的解答：
function solution (nums) {
  let left = 0, right = nums.lenght - 1;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] <= nums[left]) {
      right = mid
    } else if (nums[mid] > nums[right] ){
      left = mid
    }
  }
  return right
}
```
