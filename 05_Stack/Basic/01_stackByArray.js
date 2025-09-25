let stack = [];

stack.push(10);
stack.push(12);
stack.push(15);

console.log(stack.pop()); // remove last one

console.log(stack[stack.length - 1]); // peek

console.log(stack.length === 0); // isEmpty
