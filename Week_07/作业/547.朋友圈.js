/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  let n = M.length;
  if (n == 0) {
    return 0;
  }
  // 求连通分量
  let count = n;
  // 给每个元素单集建立秩
  let rank = new Array(n);
  let find = (p) => {
    while (p != parent[p]) {
      // 路径压缩
      // 区别与上述模版，很巧妙，通过直接将当前节点的父节点直接指向爷爷节点
      parent[p] = parent[parent[p]];
      p = parent[p];
    }
    return p;
  }
  // 查询两个相交集合
  let union = (p, q) => {
    let rootP = find(p);
    let rootQ = find(q);
    // 集合相交则不合并
    if (rootP == rootQ) {
      return;
    }
    // 按秩合并
    if (rank[rootP] > rank[rootQ]) {
      parent[rootQ] = rootP;
    } else if (rank[rootP] < rank[rootQ]) {
      parent[rootP] = rootQ;
    } else {
      parent[rootQ] = rootP;
      // 相同的秩都加1
      rank[rootP]++;
    }
    // 求连通分量，每合并两个集合，即整体减少一个独立集合
    count--;
  }
  let parent = new Array(n);
  for (let i = 0; i < n; i++) {
    parent[i] = i;
    // 初始化秩
    rank[i] = 1;
  }
  // 并查集搜索开始
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] == 1) {
        union(i, j);
      }
    }
  }
  // 返回连通分量结果
  return count;
};
// @lc code=end

