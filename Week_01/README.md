## 数组、链表、跳表
### 数组
#### 数组的复杂度分析
每当你申请一个数组时，内存管理器会开辟连续的地址，每个地址可以由内存管理器直接访问。这个时间复杂度是O1，所以数组的访问非常快，然而问题就是当增加、删除数组时出现，因为地址是连续的，所以每当插入一个、或者删除一个元素，就要移动之后的元素的位置，这样的时间复杂度就为On了。
增删操作是On, 查询等操作是O1, n长度的数组，空间复杂度为On
#### 数组算法的常用解法
- **一维数组：**
1、一维数组的坐标变换
  ```javascript
    // 枚举法 On
    for (var i = 0; i < nums.length - 1; i++) {
      for (var j = i + 1; j < nums.length; j++) {
        ...
      }
    }
    // 左右边界，向中间收敛：左右夹逼法
    for (let i = 0, j = len - 1; i < j;) {
      ...
    }

    let L = 0
    let R = arr.length - 1
    while (L < R) {
      ...
    }
  ```
- **有序**：可以二分查找，有公式，转为有序后更好解题
- **无序**：hash表、双指针、一维的动态规划
  比如两数之和，数组去重，使用hash可以减少时间复杂度
  题目是要查找某个符合条件问题时，比如三数之和，盛最多水的容器时，利用双指针可以快速找到符合的条件
将无序变为有序更方便求解，复杂度优化可以升维然后降低时间复杂度

### 链表
链表每个元素都有value 和 next， value是元素的值， next指针是指向下一个元素
单项链表：只有next； 双向链表： 还有一个prev； 头指针： head ， 尾指针： tail， 最后一个元素指向空，指向head就成了循环链表
#### 链表的复杂度分析
[单链表插入删除元素时间复杂度探究](https://blog.csdn.net/gaoxiangnumber1/article/details/44634485)
增加一个元素，只需要把前一个的指针指向 新元素， 新元素指针指向 下一个元素
删除操作，同理。
如果知道节点地址，链表的增删，不会引起群移的操作，也不需要去复制元素。所以链表移动和修改操作的效率很高O1，如果不知道节点地址，需要先遍历查找到节点地址（On）再操作（O1）
然而访问就不简单了，要从head开始找 On
总结： 查询On,其他操作都是O1
#### 链表算法的常用解法
- [快慢指针](https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/shuang-zhi-zhen-ji-qiao)
```javascript
// 判断是否是环形链表
function hasCycle(head) {
  let fast = head, slow = head
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return true
  }
  return false
}
```
利用快慢指针解环形链表的一些结论：
1. 如果有环，快指针一定会碰到慢指针
2. 第一次相遇时，假设慢指针 slow 走了 k 步，那么快指针 fast 一定走了 2k 步
3. 设相遇点距环的起点的距离为 m，那么环的起点距头结点 head 的距离为 k - m，也就是说如果从 head 前进 k - m 步就能到达环起点。
题目： 已知链表中含有环，返回这个环的起始位置 (一次快慢相遇后，将slow放置在head，再一次匀速相遇后的点就是环的起点)
```javascript
// 判断是否是环形链表
function detectCycle(head) {
  let fast = head, slow = head
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return break
  }
  slow = head
  while(show != fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow
}
```
3、寻找链表的中点
类似上面的思路，我们还可以让快指针一次前进两步，慢指针一次前进一步，当快指针到达链表尽头时，慢指针就处于链表的中间位置。
```javascript
while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
}
// slow 就在中间位置
return slow;
```
4.寻找链表的倒数第 k 个元素
我们的思路还是使用快慢指针，让快指针先走 k 步，然后快慢指针开始同速前进。这样当快指针走到链表末尾 null 时，慢指针所在的位置就是倒数第 k 个链表节点（为了简化，假设 k 不会超过链表长度）：
### 跳表
数组有序，快速查找可以用 二分查找
链表有序的时候，该如何快速查询？ 用跳表
跳表对标平衡树和二分查找，是一种插入/搜索/删除 都是Ologn的数据结构
跳表的思想是升维，空间换时间，可以大大减小了时间复杂度
在跳表表中查询任意数据的时间复杂度就是Ologn
LRU Cache - Linked list： LRU 缓存机制
Redis - Skip List：跳跃表、为啥 Redis 使用跳表（Skip List）而不是使用 Red-Black？

## 栈、队列、优先队列、双端队列
### 栈 (stack) 和 队列 (queue)
- 栈： 先入后出 添加删除皆为O1，查询为On，因为是无序的，需要一个一个遍历
- 队列： 先入先出 添加删除皆为O1，查询为On
实战中没有栈和队列，常见的是双端队列
题型：如果一个东西，它具有最近相关性的话（像洋葱一样的结构），就可以用栈解决
### 双端队列 Deque Double-End Queue
可以理解为 一个栈和队列的结合体
特点：
 - 可以从前面push和pop 也可以在尾端push和pop(两端都可以进出)
 - 插入和删除都是O1操作，查询还是On（无序的）
题型：滑动窗口
 ### 优先队列
 插入O1，取出OlogN
 特点： 按照元素的优先级取出
