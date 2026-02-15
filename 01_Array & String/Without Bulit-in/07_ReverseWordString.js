function ReverseWordStr(s) {
  let words = [];
  let word = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      word += s[i];
    } else if (word.length > 0) {
      words.push(word);
      word = "";
    }
  }
  
  if (words.length > 0) {
    words.push(word); // The first loop only adds a word when it hits a space.
    //  But word = 'world' is still not pushed because at last no space found
  }
  let result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i !== 0) result += " "; // For index 0, add "world!" → don’t add space
    // but except greater than 0 add aways a space For index 1, add "hello" → add a space
  }
  return result;
}

console.log(ReverseWordStr("  hello world!  "));
