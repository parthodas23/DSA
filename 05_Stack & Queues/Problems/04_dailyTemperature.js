const dailyTemperature = (temp) => {
  let result = new Array(temp.length).fill(0);
  let stack = [];
  for (let i = temp.length - 1; i >= 0; i--) {
    while (stack.length && temp[i] >= temp[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }
  return result;
};
