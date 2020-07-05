let ladderLength = function (beginWord, endWord, wordList) {
  let wordListSet = new Set(wordList);
  if (!wordListSet.has(endWord)) {
    return 0;
  }
  let beginSet = new Set();
  beginSet.add(beginWord);
  let endSet = new Set();
  endSet.add(endWord)
  let visited = new Set();
  let level = 1;
  // BFS
  while (beginSet.size > 0 && endSet.size > 0) {
    if (beginSet.size > endSet.size) {
      let tmp = beginSet;
      beginSet = endSet;
      endSet = tmp;
    }
    let temp = new Set();
    for (let key of beginSet) {
      for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < 26; j++) {
          let tmp = key.slice(0, i) + String.fromCharCode(97 + j) + key.slice(i + 1);
          if (endSet.has(tmp)) {
            return level + 1;
          }
          if (!visited.has(tmp) && wordListSet.has(tmp)) {
            temp.add(tmp);
            visited.add(tmp);
          }
        }
      }
    }
    beginSet = temp;
    level++;
  }
  return 0;
}
