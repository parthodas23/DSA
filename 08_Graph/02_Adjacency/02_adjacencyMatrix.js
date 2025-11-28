const nodes = ["A", "B", "C", "D"];
let size = nodes.length;
let matrix = Array.from({ length: size }, () => Array(size).fill(0));

const addEdgeAndNode = (matrix, nodes, a, b) => {
  let i = nodes.indexOf(a);
  let j = nodes.indexOf(b);

  matrix[i][j] = 1;
  matrix[j][i] = 1;
};

addEdgeAndNode(matrix, nodes, "A", "B");
addEdgeAndNode(matrix, nodes, "A", "C");
addEdgeAndNode(matrix, nodes, "B", "D");
addEdgeAndNode(matrix, nodes, "C", "D");

console.log(matrix);
