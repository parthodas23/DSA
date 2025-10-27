const combinationSum = (candidates, target) => {
  let result = [];
  const backtrack = (start, path, sum) => {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, path, sum + candidates[i]); // in backtrack 'i' ensure we can use any num multiple times
      path.pop();
    }
  };
  backtrack(0, [], 0);
  return result;
};

console.log(combinationSum([1, 2, 3, 4, 5, 6, 7], 7));
