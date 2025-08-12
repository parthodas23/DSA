function reverseString(str) {
  let words = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== " ") {
      word += char;
    } else if (char === " " && word.length > 0) {
      words.push(word);
      word = "";
    }
  }
  let result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    return (result += words[i]);
  }
}

console.log(reverseString("  Hello  Wrold!  "));
