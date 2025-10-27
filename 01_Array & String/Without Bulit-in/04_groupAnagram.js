var groupAnagrams = function (strs) {
  let groups = {}; // we have to create this obj outside of the loop because it's store all words not just only one
  for (let i = 0; i < strs.length; i++) {
    // it's run strs length of times

    // in here just for one word only one oparetion happen once at a time
    let word = strs[i];
    let count = Array(26).fill(0); // just create one arr once at a time

    for (let k = 0; k < word.length; k++) {
      let charCode = word.charCodeAt(k);
      let index = charCode - 97;
      count[index] += 1; // each time one value of 26 length of arr
    }
    let key = ""; // create it as a form of a string
    for (let k = 0; k < 26; k++) {
      // run for only one word once at a time
      key += "#" + count[k];
    }
    if (!groups[key]) {
      groups[key] = []; // 1st create []
    } // after running if block it's became true, now if we run else block it will not run because if was true so skip the 1st word
    groups[key].push(word); // now in here key wise push word in that []
  }
  // we also have to create result outside of the loop because it's collect the groups key and values

  // let result = [];
  // let index = 0;
  // for (let key in groups) {
  //   result[index] = groups[key];
  //   index++;
  // }
  // return result;

  return Object.values(groups);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
