var generate = function (numRows) {
  if (numRows === 1) return [[1]];

  let prevTriangle = generate(numRows - 1);
  let lastRow = prevTriangle[prevTriangle.length - 1];

  let newRow = [1];
  for (let i = 1; i < lastRow.length; i++) {
    newRow.push(lastRow[i - 1] + lastRow[i]);
  }
  newRow.push(1);
  prevTriangle.push(newRow);

  return prevTriangle;
};

console.log(generate(5));
