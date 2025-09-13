let s = new Set();

s.add(1);
s.add(2);
s.add(3);

console.log(s);

console.log(s.has(3));
console.log(s.has(4));

for (let val of s) {
  console.log(val);
}

console.log(...s);

let arr = [1, 2, 3];
let set = new Set(arr);
console.log(set);
