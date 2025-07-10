// let str = " ";
// let arr = ["f", "j"];
// str[0] = arr[0];
// console.log(str[0]);

// using extra space

// var reverseString = (s) => {
//   let str = "";

//   for (let i = s.length - 1; i >= 0; i--) {
//     str = str + s[i];
//     console.log(str);
//   }
//   for (let i = 0; i < s.length; i++) {
//     s[i] = str[i];
//   }
//   return s;
// };
// console.log(reverseString(["h", "e", "l", "l", "o"]));

var reverseString = (s) => {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]; // just swap
    left++;
    right--;
  }
  return s;
};
console.log(reverseString(["h", "e", "l", "l", "o"]));
