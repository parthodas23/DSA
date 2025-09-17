const reverseString = (str) => {
  if (str.length <= 1) return str;

  let firstChar = str[0];
  let smallerReverse = reverseString(str.slice(1)); // remove 1st char

  return smallerReverse + firstChar;
};
console.log(reverseString("hello"));

// Stack Representation
// So the stack looks like this while waiting:

// reverseString("abcd")
// = reverseString("bcd") + "a"
// = (reverseString("cd") + "b") + "a"
// = ((reverseString("d") + "c") + "b") + "a"

// Unwinding (return values)

// reverseString("d") = "d"
// reverseString("cd") = "d" + "c" = "dc"
// reverseString("bcd") = "dc" + "b" = "dcb"
// reverseString("abcd") = "dcb" + "a" = "dcba"