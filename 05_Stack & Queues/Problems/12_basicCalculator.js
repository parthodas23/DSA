let basicCalculate = (s) => {
  let stack = [];
  let res = 0;
  let sign = 1;
  let num = 0;

  for (let char of s) {
    if (char >= "0" && char <= "9") {
      num = num * 10 + (char - "0");
    } else if (char === "(") {
      stack.push(res);
      stack.push(sign);
      res = 0;
      sign = 1;
    } else if (char === "+") {
      res += sign * num;
      num = 0;
      sign = 1;
    } else if (char === "-") {
      res += sign * num;
      num = 0;
      sign = -1;
    } else if (char === ")") {
      res += sign * num;
      num = 0;

      let prevSign = stack.pop();
      let prevRes = stack.pop();
      res = prevRes + prevSign * res;
    }
  }

  if (num !== 0) {
    res += sign * num;
  }

  return res;
};

console.log(basicCalculate("(1+(4+5+2)-3)+(6+8)"));
