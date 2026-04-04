// // time complexity for this problem
// // O (words.length * s.length) - brute for solution
// const countSubsequance = (s, words) => {
//   let count = 0;
//   for (let word of words) {
//     if (isSubsequance(s, word)) {
//       count++;
//     }
//   }

//   return count;
// };

// const isSubsequance = (s, word) => {
//   let i = 0;
//   let j = 0;

//   // word always would be the sub-sequance of s
//   while (i < s.length && j < word.length) {
//     if (s[i] === word[j]) {
//       j++;
//     }
//     i++;
//   }
//   return j === word.length;
// };

// console.log(countSubsequance("abcde", ["a", "bb", "ace", "acd"]));

const numMatchingSubseq = (s, words) => {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) map[s[i]] = [i];
    else map[s[i]].push(i);
  }
  let count = 0;
  for (let word of words) {
    if (isSubsequance(word, map)) count++;
  }

  return count
};

const isSubsequance = (word, map) => {
  let prevIndex = -1;

  for (let ch of word) {
    if (!map[ch]) return false;

    let indices = map[ch];

    let left = 0;
    let right = indices.length - 1;
    let found = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (indices[mid] > prevIndex) {
        found = indices[mid];
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    if(found===-1)return false

    prevIndex=found
  }
  return true
};

console.log(numMatchingSubseq("abac", ["aa", "aba", "aac", "abc", "ac","aaa"]));
