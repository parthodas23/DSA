const pascaleTriangle = (numRows) => {
  let trangle = [];
  for (let i = 0; i < numRows; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
      // row[j] keep track of this -->     slot 0 | slot 1 | slot 2 | slot 3 | slot 4
      //                                       1   |   4    |   6    |   4    |   1

      row[j] = trangle[i - 1][j - 1] + trangle[i - 1][j];

      // triangle[i - 1] --> previous row.
      // current position j, take element above-left ([j - 1])
      // and element above-right ([j])
    }
    if (i > 0) row.push(1);
    trangle.push(row);
  }

  return trangle;
};

console.log(pascaleTriangle(5));

// var generate = function (numRows) {
//   if (numRows === 1) return [[1]];

//   let prevTriangle = generate(numRows - 1);
//   let lastRow = prevTriangle[prevTriangle.length - 1];

//   let newRow = [1];
//   for (let i = 1; i < lastRow.length; i++) {
//     newRow.push(lastRow[i - 1] + lastRow[i]);
//   }
//   newRow.push(1);

//   prevTriangle.push(newRow);

//   return prevTriangle;
// };

// console.log(generate(5));
