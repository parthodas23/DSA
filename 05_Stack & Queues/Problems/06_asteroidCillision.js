var asteroidCollision = function (asteroids) {
  // if any problem you face check the Notion note
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    let roid = asteroids[i];
    let alive = true;
    while (alive && roid < 0 && stack.length && stack[stack.length - 1] > 0) {
      let top = stack[stack.length - 1];
      if (top < -roid) {
        stack.pop();
        continue;
      } else if (top === -roid) {
        stack.pop();
      }
      alive = false;
    }
    if (alive) stack.push(roid);
  }
  return stack;
};
console.log(asteroidCollision([5, 4, -5]));
