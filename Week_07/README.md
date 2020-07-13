### 字典树
```js
class TrieNode{
  constructor(){
    this.END = false;
    this.children = new Array(26);
  }
  containsKey(letter){
    return this.children[letter.charCodeAt() - 97] != undefined;
  }
  put(letter,newTrieNode){
    this.children[letter.charCodeAt() - 97] = newTrieNode;
  }
  getNext(letter){
    return this.children[letter.charCodeAt() - 97];
  }
  setEnd(){
    this.END = true;
  }
  isEnd(){
    return this.END;
  }
}
let root = null;
let Trie = function(){
    root = new TrieNode();
}
Trie.prototype.insert = (word) => {
    let currNode = root;
    for(let i = 0;i < word.length;i++){
        if(!currNode.containsKey(word[i])){
            currNode.put(word[i],new TrieNode());
        }
        currNode = currNode.getNext(word[i]);
    }
    currNode.setEnd();
}
let searchPrefix = (word) => {
    let currNode = root;
    for(let i = 0;i < word.length;i++){
        if(currNode.containsKey(word[i])){
            currNode = currNode.getNext(word[i]);
        }else{
            return null;
        }
    }
    return currNode;
}
Trie.prototype.search = (word) => {
    let currNode = searchPrefix(word);
    return currNode != null && currNode.isEnd();
}
Trie.prototype.startsWith = (prefix) => {
    let currNode = searchPrefix(prefix);
    return currNode != null;
}
```
### 并查集
用于解决组团和配对的问题，（好友、朋友圈、判断是否是好友）
makeSet(s)： 新建并查集
unionSet(x, y)，将两个元素集合合并
find(x)： 判断元素在哪个集合


### 高级搜索
初级搜索：
  优化方式： 不重复， 剪支（状态树不必要的时候）
  搜索方向： DFS BFS
  双向搜索、启发式搜索

双向BDF：
从前和后两个方向扩散，直到有重合

