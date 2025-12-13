const ladderLength = (beginWord, endWord, wordList) => {
  let set = new Set(wordList);
  if (!set.has(endWord)) return 0;

  let chars = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

  let queue = [beginWord];

  let level = 1;
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let word = queue.shift();

      if (word === endWord) return level;

      let wordArr = word.split("");

      for (let j = 0; j < wordArr.length; j++) {
        let orginal = wordArr[j];
        for (let ch of chars) {
          if (orginal === ch) continue;

          wordArr[j] = ch;

          let newWord = wordArr.join("");
          if (set.has(newWord)) {
            queue.push(newWord);
            set.delete(newWord);
          }
        }
        wordArr[j] = orginal;
      }
    }
    level++;
  }

  return 0;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
