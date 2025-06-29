// var obj = {};
// obj["abc"] = ["abc", "bca", "cab"];
// //   key-->[]            value
// console.log(obj);

function groupAnagrams(strs) {
  let map = {};

  for (let word of strs) {
    let count = new Array(26).fill(0);
    console.log(count);
    for (let char of word) {
      let index = char.charCodeAt(0) - "a".charCodeAt(0);
      // 'a'.charCodeAt(0)--> 97, so 'c'- 97 --> 2 and this would be use as a index

      // console.log(count);
      count[index]++;
    }

    console.log(count);
    let key = count.join("#"); // convert arr into string

    if (!map[key]) {
      map[key] = [];
      // key      value
    }
    map[key].push(word); //  	map["1#0#0#...#1"] = ["eat"]
    console.log(map[key]);
  }

  return Object.values(map); // in here obj value would be store in a array
}

console.log(groupAnagrams(["eat"]));
