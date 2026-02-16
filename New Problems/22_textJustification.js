const justified = (words, maxWidth) => {
  const result = [];
  let i = 0;
  while (i < words.length) {
    let j = i + 1;
    let lineLength = words[i].length;
    while (j < words.length && lineLength + 1 + words[j].length <= maxWidth) {
      lineLength += 1 + words[j].length;
      j++;
    }

    let numOfWords = j - i;
    let line = "";

    if (j === words.length && numOfWords === 1) {
      for (let k = i; k < j; k++) {
        line += words[k];

        if (k < j - 1) line += " ";
      }
      line += " ".repeat(maxWidth - line.length);
    } else {
      let totalLetters = 0;

      for (let k = i; k < j; k++) {
        totalLetters += words[k].length;
      }
      console.log(totalLetters);

      let totalSpaces = maxWidth - totalLetters;
      let spaceBetween = Math.floor(totalSpaces / (numOfWords - 1));
      let extraSpaces = totalSpaces % (numOfWords - 1);

      for (let k = i; k < j - 1; k++) {
        line += words[k];
        line += " ".repeat(spaceBetween);

        if (extraSpaces > 0) {
          line += " ";
          extraSpaces--;
        }
      }
      line += words[j - 1];
    }

    result.push(line);
    i = j;
  }

  return result;
};

console.log(
  justified(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16,
  ),
);

console.log(
  justified(["What", "must", "be", "acknowledgment", "shall", "be"], 16),
);
