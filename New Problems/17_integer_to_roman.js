const integerToRoman = (num) => {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const map = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  let roman_str = "";

  for (let value of values) {
    while (num >= value) {
      roman_str += map[value];
      num -= value;
    }

    if (num === 0) break;
  }

  return roman_str;
};

console.log(integerToRoman(3749));
