let Group_Anagram = (strs) => {
  let groups = {};
  for (let word of strs) {
    let sorted = word.split("").sort().join("");
    console.log(sorted);

    if (!groups[sorted]) {
      groups[sorted] = [];
    }
    groups[sorted].push(word);
  }
  //   console.log(groups);

  return Object.values(groups);
};

console.log(Group_Anagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
