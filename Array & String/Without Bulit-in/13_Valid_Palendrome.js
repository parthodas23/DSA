var isPalindrome = function (s) {
  let value = s.toLowerCase();
  let chars = [];
  for (let i = 0; i < value.length; i++) {
    let char = value[i].charCodeAt(); // get a char num
    if ((char >= 97 && char <= 122) || (char >= 48 && char <= 57)) {
      // Alphanumeric = letters + digits
      chars.push(value[i]); 
    }
  }

  // now we have to use two pointer
  let right = chars.length - 1;
  let left = 0;
  while (left < right) {
    if (chars[left] !== chars[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));

// convert the string to lowercase → O(n)
// 1st for loop → O(n)
// for (isPalendrome) → O(n)
// while loop two pointers → O(n)

