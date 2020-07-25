### 五毒神掌
- 第一遍(读题思考、看题解、背诵默写好的解法)
- 第二遍（马上自己、leetcode提交，多种解法体会，优化）
- 第三遍（过一天后，在重复做题，不同解法的熟练程度，专项练习）
- 第四遍（过一周后，反复练习相同题目）
- 第五遍（面试前一周恢复性训练）

#### 切题四件套
1. 审题与出题者沟通，是否理解正确
2. 想出所有解题的办法，比较写出最优解
3. 多写，多敲代码
4. 测试用例也写上

[BFS解题](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/bfs-de-shi-yong-chang-jing-zong-jie-ceng-xu-bian-l/)
总结一下 BFS 的几个主要步骤(贴一下之前的总结)
1. 肯定会用到 deque 的结构用来模拟队列，BFS精髓也在这里。
2. 队列里肯定是有一个初始点
3. 然后每次处理从队列中出队一个元素
4. 对元素进行扩张(具体如何扩张需要根据题目要求)
5. 对于扩张后满足某条件的点再进行处理，根据需要进入队列，进入队列的点就是扩到下一层的点(不同题目需要处理的方法不同，大家灵活运用)
6. 然后接着循环处理 deque 中的元素，直到 deque 为空，则代表所有点都已经完成扩张
7. 最后根据题目要求输出结果(当然这已经不属于 BFS 模板的范围了)
8. 所有 BFS 的模板题都大致是这个思路，只不过是可能有小的变形。


|    题目   |第一遍 |第二遍 |第三遍 | 第四遍 | 第五遍 |
|-----------------------|-----|-----|-----|-----|-----|
|*****动态规划*****  | ✅   |  🆗   |   👌  |  💯   |  ✌️    |
|不同路径     |     |      |     |     |     |
|不同路径 II     |    |      |     |     |     |
|最长公共子序列    |    |      |     |     |     |
|爬楼梯   |    |      |     |     |     |
|三角形最小路径和   |  |      |     |     |     |
|最大子序和  |    |      |     |     |     |
|乘积最大子数组    |    |      |     |     |     |
|零钱兑换   |   |      |     |     |     |
|打家劫舍   |    |      |     |     |     |
|打家劫舍 II  |    |      |     |     |     |
|买卖股票的最佳时机  |    |      |     |     |     |
|买卖股票的最佳时机 II |    |      |     |     |     |
|买卖股票的最佳时机 III |    |      |     |     |     |
|最佳买卖股票时机含冷冻期 |    |      |     |     |     |
|买卖股票的最佳时机 IV   |    |      |     |     |     |
|买卖股票的最佳时机含手续费  |    |      |     |     |     |
|搜索二维矩阵  |    |      |     |     |     |
|寻找旋转排序数组中的最小值  |    |      |     |     |     |
|*****高级动态规划*****  |    |     |     |     |     |
|完全平方数  |    |      |     |     |     |
|编辑距离 （重点）  |    |      |     |     |     |
|跳跃游戏  |    |      |     |     |     |
|跳跃游戏 II   |    |      |     |     |     |
|不同路径  |    |      |     |     |     |
|不同路径 II |    |      |     |     |     |
|不同路径 III |    |      |     |     |     |
|零钱兑换|    |      |     |     |     |
|零钱兑换 II  |    |      |     |     |     |
|*****作业*****  |    |     |     |     |     |
|最小路径和|    |      |     |     |     |
|解码方法|    |      |     |     |     |
|最大正方形|    |      |     |     |     |
|任务调度器|    |      |     |     |     |
|回文子串|    |      |     |     |     |
|最长有效括号|    |      |     |     |     |
|编辑距离|    |      |     |     |     |
|矩形区域不超过 K 的最大数值和|    |      |     |     |     |
|青蛙过河|    |      |     |     |     |
|分割数组的最大值|    |      |     |     |     |
|学生出勤记录 II|    |      |     |     |     |
|最小覆盖子串|    |      |     |     |     |
|戳气球|    |      |     |     |     |

不同路径（Facebook、亚马逊、微软在半年内面试中考过）
不同路径 II （谷歌、美团、微软在半年内面试中考过）
最长公共子序列（字节跳动、谷歌、亚马逊在半年内面试中考过）

爬楼梯（阿里巴巴、腾讯、字节跳动在半年内面试常考）
三角形最小路径和（亚马逊、苹果、字节跳动在半年内面试考过）
三角形最小路径和高票回答： https://leetcode.com/problems/triangle/discuss/38735/Python-easy-to-understand-solutions-(top-down-bottom-up)
最大子序和（亚马逊、字节跳动在半年内面试常考）
乘积最大子数组（亚马逊、字节跳动、谷歌在半年内面试中考过）
零钱兑换（亚马逊在半年内面试中常考）


打家劫舍（字节跳动、谷歌、亚马逊在半年内面试中考过）
打家劫舍 II （字节跳动在半年内面试中考过）
买卖股票的最佳时机（亚马逊、字节跳动、Facebook 在半年内面试中常考）
买卖股票的最佳时机 II （亚马逊、字节跳动、微软在半年内面试中考过）
买卖股票的最佳时机 III （字节跳动在半年内面试中考过）
最佳买卖股票时机含冷冻期（谷歌、亚马逊在半年内面试中考过）
买卖股票的最佳时机 IV （谷歌、亚马逊、字节跳动在半年内面试中考过）
买卖股票的最佳时机含手续费
一个方法团灭 6 道股票问题
高级 DP 实战题目
完全平方数（亚马逊、谷歌在半年内面试中考过）
编辑距离 （重点）
跳跃游戏（亚马逊在半年内面试中考过）
跳跃游戏 II （亚马逊、华为字节跳动在半年内面试中考过）
不同路径（Facebook、亚马逊、微软在半年内面试中考过）
不同路径 II （谷歌、美团、微软在半年内面试中考过）
不同路径 III （谷歌在半年内面试中考过）
零钱兑换（亚马逊在半年内面试中常考）
零钱兑换 II （亚马逊、字节跳动在半年内面试中考过）


本周作业
中等
最小路径和（亚马逊、高盛集团、谷歌在半年内面试中考过）
解码方法（亚马逊、Facebook、字节跳动在半年内面试中考过）
最大正方形（华为、谷歌、字节跳动在半年内面试中考过）
任务调度器（Facebook 在半年内面试中常考）
回文子串（Facebook、苹果、字节跳动在半年内面试中考过）
困难
最长有效括号（字节跳动、亚马逊、微软在半年内面试中考过）
编辑距离（字节跳动、亚马逊、谷歌在半年内面试中考过）
矩形区域不超过 K 的最大数值和（谷歌在半年内面试中考过）
青蛙过河（亚马逊、苹果、字节跳动在半年内面试中考过）
分割数组的最大值（谷歌、亚马逊、Facebook 在半年内面试中考过）
学生出勤记录 II （谷歌在半年内面试中考过）
最小覆盖子串（Facebook 在半年内面试中常考）
戳气球（亚马逊在半年内面试中考过）