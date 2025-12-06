var minMutation = function (startGene, endGene, bank) {
  let bankSet = new Set(bank);
  if (!bankSet.has(endGene)) return -1;

  let chars = ["A", "C", "G", "T"];
  let queue = [[startGene, 0]];
  let visited = new Set([startGene]);

  while (queue.length) {
    let [start, steps] = queue.shift();

    if (start === endGene) return steps;

    let arr = start.split("");
    for (let i = 0; i < arr.length; i++) {
      let orginal = arr[i];

      for (let char of chars) {
        if (orginal === char) continue;
        // otherwise explore
        arr[i] = char; // we're changing based on the position i. so in here AA or CC doesn't matter. just position of i matter

        let newGene = arr.join("");
        if (bankSet.has(newGene) && !visited.has(newGene)) {
          visited.add(newGene);
          queue.push([newGene, steps + 1]);
        }
      }
      arr[i] = orginal; // restore everytime
    }
  }

  return -1;
};

console.log(
  minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])
);
