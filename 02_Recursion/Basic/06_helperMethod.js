const collectsOdds = (arr) => {
  let result = [];

  // this inner function is recursive and outter isn't
  const helper = (helperInput) => {
    if (helperInput.length === 0) return 0;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  };
  helper(arr);
  return result;
};

console.log(collectsOdds([1, 2, 3, 4, 5]));
