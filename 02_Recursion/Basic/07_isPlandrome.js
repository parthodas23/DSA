const isPlanedrome = (s) => {
  let value = s.toLowerCase();

  function helper(left, right) {
    if (left >= right) return true;

    let leftChar = value[left].charCodeAt();
    if (
      !(
        (leftChar >= 97 && leftChar <= 122) ||
        (leftChar >= 48 && leftChar <= 57)
      )
    ) {
      return helper(left + 1, right); // skip the char if it's alphanumeric
    }
    let rightChar = value[right].charCodeAt();
    if (
      !(
        (rightChar >= 97 && rightChar <= 122) ||
        (rightChar >= 48 && rightChar <= 57)
      )
    ) {
      return helper(left, right - 1);
    }

    if (value[left] !== value[right]) return false;

    return helper(left + 1, right - 1); // it's use for normal increment, decrement
  }
  return helper(0, value.length - 1);
};

console.log(isPlanedrome("racacar"));
console.log(isPlanedrome("A man, a plan, a canal: Panama"));
