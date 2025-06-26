// var obj = {};
// obj["abc"] = ["abc", "bca", "cab"];
// //   key-->[]            value
// console.log(obj);

function groupAnagrams(strs) {
  // This object will hold our groups
  var map = {};

  // Go through each word in the input array
  for (var i = 0; i < strs.length; i++) {
    var word = strs[i];

    // Step 1: Create frequency counter for this word
    var count = [];
    for (var j = 0; j < 26; j++) {
      count[j] = 0; // Set all positions to 0 (26 letters)
    }
    // console.log(count);
    // Step 2: Count each letter in the word
    for (var j = 0; j < word.length; j++) {
      var letter = word[j];

      // console.log(letter);

      // Calculate the position in the count array
      // 'a' means position 0, 'b' is 1, ..., 'z' is 25
      var letterPosition = getLetterPosition(letter);
      // console.log(letterPosition);
      // Increase the count for this letter
      // console.log(count[letterPosition]);
      count[letterPosition] = count[letterPosition] + 1;
    }

    // Step 3: Make a key (unique string) based on count array
    var key = "";
    for (var j = 0; j < count.length; j++) {
      key = key + count[j] + "-"; // Example: "1-0-0-0-1-..."
    }

    // Step 4: Group words using the key
    if (map[key] === undefined) {
      map[key] = []; // If this key is not in the map, create a new array
    }

    map[key].push(word); // Add the word to its group
  }

  // Step 5: Prepare final result
  var result = [];
  for (var key in map) {
    result.push(map[key]);
  }

  return result;
}

// Helper function to get position of a letter: 'a' → 0, 'b' → 1, ..., 'z' → 25
function getLetterPosition(letter) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === letter) {
      return i;
    }
  }
  return -1; // Error case (should not happen)
}

// Test the function
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
