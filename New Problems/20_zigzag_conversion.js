const zigzag = (s, numRows) => {
  let n = numRows;
  if (n === 1 || n >= s.length) return s;
  let rows = new Array(n).fill("");
  let curr_row = 0;
  let going_down = false;

  for (let char of s) {
    rows[curr_row] += char;

    if (curr_row === 0 || curr_row === n - 1) {
      going_down = !going_down;
    }

    curr_row += going_down ? 1 : -1;
  }

  return rows.join("");
};

console.log(zigzag("PAYPALISHIRING", 4));
console.log(zigzag("PAYPALISHIRING", 3));
