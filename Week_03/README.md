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
### 思维要点
1、不要人肉进行递归（最大误区）
2、找到最近最简的方法，将其拆解成可重复解决的问题（重复子问题 ）
3、数学归纳法的思维 