### 位运算

| 含义       | 运算符         | 示例        |
|:----------:| -------------:|:-------------|
| 左移 | <<  | 0011 => 0110 |
| 右移 | >>  | 0110 => 0011 |
| 按位或（不同取1，相同就不变| ｜  | 0011 ｜ 1011 => 1011 |
| 按位与（不同取0，相同就不变） | &  | 0011 & 1011 => 0011 |
| 按位取反 | ～  | ～0011 => 1100 |
| 按位异或(相同取为0，相异取为1) | ^  | 0011 ^ 1011 => 1000 |
位运算符
  - 为什么用位运算？
    机器里的数字表示方式和存储格式就是 二进制
  - 十进制 <—>二进制 : 如何转换?
    1. 余数短除法除以二，一直除以二的余数，再列出来
        156/2 78/2 39/2 19/2  9/2 4/2  2/2  1/2
          0    0    1     1    1   0    0    1
        得到 10011100 转化回去，就2几次方然后累加得到10进制的结果
  - XOR - 异或  
    异或操作的一些特点
    x^0 = x
    x^ 1s = ~x (1s表示全1，相当于~0)
    x^(~x) = 1s
    x^x = 0
    c = a^b =>  a^c=b, b^c =a //交换两个数
    a^b^c = a^(b^c) = (a^b)^c

- 指定位置的位运算
1. 将x最右边的n位清零:x&(~0<<n)
2. 获取x的第n位值(0或者1):(x>>n)&1
3. 获取x的第n位的幂值:x&(1<<n)
4. 仅将第n位置为1:x|(1<<n)
5. 仅将第n位置为0:x&(~(1<<n))
6. 将x最高位至第n位(含)清零:x&((1<<n)-1)
7. 将第n位至第0位(含)清零:x&(~((1<<(n+1))-1))

- 实战位运算要点
1. 判断奇偶:
x%2==1 —>(x&1)==1 奇数
x%2==0 —>(x&1)==0 偶数
位运算更快，可以用 x&1的方式判断奇偶

2. x>>1—>x/2 （右移一位相当于除了2）
即: x=x/2; —> x=x>>1;
mid=(left+right)/2; —> mid=(left+right)>>1;

3. X=X&(X-1)清零最低位的1
   X&-X=>得到最低位的 1
   X&~X=>0

### 布隆过滤器
可以快速的判断元素不存在，对于可能存在的元素，还在继续查找

### LRU Cache （Least recently used）最近最少使用
两个要素: 大小（不够用会淘汰最久远的元素） 、替换策略(最近被使用的元素永远被翻新到最前面)
• Hash Table + Double LinkedList
• O(1) 查询
  O(1) 修改、更新
  实现LRU cache
  ```java
public class LRUCache {
    private Map<Integer, Integer> map;
    public LRUCache(int capacity) {
      map = new LinkedCappedHashMap<>(capacity);
    }
    public int get(int key) { 
      if(!map.containsKey(key)) { return -1; } 
      return map.get(key);
    }
    public void put(int key, int value) { 
      map.put(key,value);
    }
    private static class LinkedCappedHashMap<K,V> extends LinkedHashMap<K,V> {
      int maximumCapacity;
      LinkedCappedHashMap(int maximumCapacity) { 
        super(16, 0.75f, true); 
        this.maximumCapacity = maximumCapacity;
      }
      protected boolean removeEldestEntry(Map.Entry eldest) { 
        return size() > maximumCapacity;
      } 
    }
}
  ```


```js
实现哈希表
实现双链表
let LRUCache = function(capacity) {
    初始化容量，用于判断LRU是否已满
    初始化哈希表映射，用于查找节点
    初始化双链表，用于插入、删除节点
};
LRUCache.prototype.get = function(key) {
    if(哈希查找 不存在){
        return -1;
    }else{
        将此节点置于开头，为最近访问节点
        return 节点值
    }
}
LRUCache.prototype.put = function(key, value) {
    if(哈希查找 已经存在){
        删除旧的数据
        
    }else{
        if(LRU 即 双链表已满){
            删除尾节点
            更新哈希映射值，并将更新后的节点置于开头
        }
        将新节点置于开头
        新建新节点的哈希映射
    }
}

```

### 排序算法
1. 比较类排序: 通过比较来决定元素间的相对次序，由于其时间复杂度不能突破
O(nlogn)，因此也称为非线性时间比较类排序。
  - 交换排序： 冒泡排序， 快速排序*
  - 插入排序： 简单插入排序， 希尔排序
  - 选择排序： 简单选择排序， 堆排序*
  - 归并排序*： 二路归并排序， 多路归并排序

2. 非比较类排序:
不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时 间下界，以线性时间运行，因此也称为线性时间非比较类排序。
  - 计数排序
  - 桶排序
  - 基数排序

初级排序 On2
1. 选择排序(Selection Sort) 每次找最小值，然后放到待排序数组的起始位置。
```js
function selectionSort(arr) {
    varlen = arr.length;
    varminIndex, temp;
    for(vari = 0; i < len - 1; i++) {
        minIndex = i;
        for(varj = i + 1; j < len; j++) {
            if(arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;

```
2. 插入排序(Insertion Sort) 从前到后逐步构建有序序列;对于未排序数据，在已排序序列中从后 向前扫描，找到相应位置并插入。
```js
function insertionSort(arr) {
    varlen = arr.length;
    varpreIndex, current;
    for(vari = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}
```
3. 冒泡排序(Bubble Sort) 嵌套循环，每次查看相邻的元素如果逆序，则交换。
```js
function bubbleSort(arr) {
    varlen = arr.length;
    for(vari = 0; i < len - 1; i++) {
        for(varj = 0; j < len - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {        // 相邻元素两两对比
                vartemp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
```
高级排序
- 快速排序
数组取标杆 pivot，将小元素放 pivot左边，大元素放右侧，然后依次 对右边和右边的子数组继续快排;以达到整个序列有序。
```js
var partition(a, begin, end) {
  let pivot = end, counter = begin
  for (let i = begin; i < end; i++) {
    if (a[i] <= a[pivot]) {
      // 交换
      [a[counter], a[i]] = [a[i], a[counter]]
      // let temp = a[counter]
      // a[counter] = a[i]
      // a[i] = temp
      counter++
    }
  }
  // for循环的结果是把所有小于a[pivot]的都放在pivot的左边
  [a[pivot], a[counter]] = [a[counter], a[pivot]]
  return counter
}
function quickSort(arr, begin, end) {
  if (end <= begin) return
  let pivot = partition(arr, begin, end)
  quickSort(arr, begin, pivot - 1)
  quickSort(arr, pivot + 1, end)
}
```
- 归并排序(Merge Sort)— 分治

1. 把长度为n的输入序列分成两个长度为n/2的子序列; 
2. 对这两个子序列分别采用归并排序;
3. 将两个排序好的子序列合并成一个最终的排序序列
```java
public static void mergeSort(int[] array, int left, int right) { 
  if (right <= left) return;
  int mid = (left + right) >> 1; // (left + right) / 2
  mergeSort(array, left, mid);
  mergeSort(array, mid + 1, right);
  merge(array, left, mid, right);
}
public static void merge(int[] arr, int left, int mid, int right) { 
  int[] temp = new int[right - left + 1]; // 中间数组
  int i = left, j = mid + 1, k = 0;
  while (i <= mid && j <= right) {
    temp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
  }
  while (i <= mid) temp[k++] = arr[i++];
  while (j <= right) temp[k++] = arr[j++];
  for (int p = 0; p < temp.length; p++) { 
    arr[left + p] = temp[p];
  }
// 也可以用 System.arraycopy(a, start1, b, start2, length)
}
```

- 堆排序(Heap Sort) — 堆插入 O(logN)，取最大/小值 O(1)
1. 数组元素依次建立小顶堆
2. 依次取堆顶元素，并删除
``` c++
void heap_sort(int a[], int len) {
  priority_queue<int,vector<int>,greater<int> > q;
  for(int i = 0; i < len; i++) { 
    q.push(a[i]);
  }
  for(int i = 0; i < len; i++) { 
    a[i] = q.pop();
  } 
}
```

特殊排序 - O(n)
- 计数排序(Counting Sort) 计数排序要求输入的数据必须是有确定范围的整数。将输入的数据值转化为键存 储在额外开辟的数组空间中;然后依次把计数大于 1 的填充回原数组
```js
function countingSort(arr, maxValue) {
    varbucket = newArray(maxValue + 1),
        sortedIndex = 0;
        arrLen = arr.length,
        bucketLen = maxValue + 1;
 
    for(vari = 0; i < arrLen; i++) {
        if(!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }
 
    for(varj = 0; j < bucketLen; j++) {
        while(bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }
    return arr;
}
```
- 桶排序(Bucket Sort)
桶排序 (Bucket sort)的工作的原理:假设输入数据服从均匀分布，将数据分到有 限数量的桶里，每个桶再分别排序(有可能再使用别的排序算法或是以递归方式 继续使用桶排序进行排)。
```js
function bucketSort(arr, bucketSize) {
    if(arr.length === 0) {
      returnarr;
    }
 
    vari;
    varminValue = arr[0];
    varmaxValue = arr[0];
    for(i = 1; i < arr.length; i++) {
      if(arr[i] < minValue) {
          minValue = arr[i];                // 输入数据的最小值
      } elseif(arr[i] > maxValue) {
          maxValue = arr[i];                // 输入数据的最大值
      }
    }
 
    // 桶的初始化
    varDEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    varbucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;  
    varbuckets = newArray(bucketCount);
    for(i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
 
    // 利用映射函数将数据分配到各个桶中
    for(i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }
    arr.length = 0;
    for(i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);                      // 对每个桶进行排序，这里使用了插入排序
        for(varj = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);                     
        }
    }
    return arr;
}
```
- 基数排序(Radix Sort) 基数排序是按照低位先排序，然后收集;再按照高位排序，然后再收集;依次类 推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按 高优先级排序。
```js
varcounter = [];
function radixSort(arr, maxDigit) {
    varmod = 10;
    vardev = 1;
    for(vari = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(varj = 0; j < arr.length; j++) {
            varbucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket]==null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        varpos = 0;
        for(varj = 0; j < counter.length; j++) {
            varvalue = null;
            if(counter[j]!=null) {
                while((value = counter[j].shift()) != null) {
                      arr[pos++] = value;
                }
          }
        }
    }
    return arr;
}
```