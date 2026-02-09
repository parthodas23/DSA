// o (n logn)
// const hIndex = (citations) => {
//   let n = citations.length;
//   citations.sort((a, b) => b - a);
//   let paperCount = 1;
//   let h_index = 0;
//   for (let i = 0; i < n; i++) {
//     if (paperCount <= citations[i]) {
//       h_index++;
//       paperCount++;
//     }
//   }

//   return h_index;
// };

const hIndex = (citations) => {
  let n = citations.length;
  let count = new Array(n + 1).fill(0);

  for (let c of citations) {
    if (c >= n) {
      count[n]++;
    } else {
      count[c]++;
    }
  }

  let papers = 0;
  for (let h = n; h >= 0; h--) {
    papers += count[h];

    if (papers >= h) {
      return h;
    }
  }

  return 0;
};

console.log(hIndex([3, 0, 6, 1, 5]));
