const backtrack = (shirts, pants, path = []) => {
  if (path.length === 2) {
    console.log(path);
    return;
  }

  let choices = path.length === 0 ? shirts : pants;

  for (let choice of choices) {
    path.push(choice);
    backtrack(shirts, pants, path);
    path.pop();
  }
};

console.log(backtrack(["red", "white"], ["blue", "gray"]));
