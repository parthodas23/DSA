var isValid = function (s) {
  let stack = [];
  const map = {
    // when char=closing bracket map[char]=opening bracket cause we store it using this (:) , but when something is opening bracket then it's gives undefined
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char); // in here we store all opening bracket
    } else {
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0; // 0 check are all of these bracket removed or not means they  matched or not
};
