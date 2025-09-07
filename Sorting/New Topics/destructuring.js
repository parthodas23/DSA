// Without destructuring:

// let x = 5, y = 10;
// let temp = x;
// x = y;
// y = temp;
// console.log(x, y); // 10 5

// With destructuring:

let x = 5,
  y = 10;

[x, y] = [y, x];

console.log(x, y); // 10 5
