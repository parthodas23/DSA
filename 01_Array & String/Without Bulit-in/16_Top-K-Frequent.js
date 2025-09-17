var topKFrequent = function (nums, k) {
  let count = {};
  let uniqueArr = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!count[num]) {
      count[num] = 1;
      uniqueArr.push(num);
    } else {
      count[num] += 1;
    }
  }

  // O(n^2)
  //   let arr = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     if (!arr.includes(nums[i])) {      // use includes(O(n)) inside a loop is worst case like O{n^2}
  //       arr.push(nums[i]);
  //     }
  //   }

  // for sort --> O(n log n)
  uniqueArr.sort((a, b) => count[b] - count[a]); // collect and order high number in count
  console.log(uniqueArr);
  // O(k)
  return uniqueArr.slice(0, k);
};

// // 1st for loop --> O(n)
// // for sort --> O(n log n)         // total is O(n log n)
// // for slice --> O(k)

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3], 2));

// const Mom = [];

// Mom.push("Pain by my family(most of all)");
// Mom.push("After went to Hong-Kong she counldn't see her father's body.");
// Mom.push(
//   "After income some money she coudent't enjoy anything just keep the money"
// );
// Mom.push("everyday seeing her family cricis, she's now sometimes just cry");
// Mom.push("i don't her best food cause she give the good food to us.");
// Mom.push("Now her only hope is her child but sometimes you.....");

// console.log(Mom);  // Most of it is Pain
