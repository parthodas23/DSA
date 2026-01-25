// Rest Parametter --> collects data , used in function parametter

const sum = (num, ...numbers) => {
  // rest operator must be used in the last
  console.log(num);
  console.log(numbers);
};

// sum(12, 1, 2, 3, 4);

// spread operator

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

let combined = [...arr1, ...arr2];

let copy = [...combined];
copy.push(10);

console.log(copy);

console.log(combined);

console.log(...combined); // spread operator won't give any arr

const user = { name: "Partha", age: 20 };

setUser((prev) => ({
  ...prev,
  age: prev.age + 1,
}));
