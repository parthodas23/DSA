const dailyTemperature = (temp) => {
  let result = new Array(temp.length).fill(0);
  let stack = []; // store index by at the last
  for (let i = temp.length - 1; i >= 0; i--) { // [73,74,75,71,69,72,76,73]
    while (stack.length && temp[i] >= temp[stack[stack.length - 1]]) { //
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = stack[stack.length - 1] - i;
    }

    stack.push(i); // 6,2
  }
  return result;
};

console.log(["a", "b"].join("/"));
