class Graph {
  constructor() {
    this.list = {};
  }

  addNode(node) {
    this.list[node] = [];
  }
  addEdge(a, b) {
    this.list[a].push(b);
    this.list[b].push(a);
  }
  printGraph() {
    for (let node in this.list) {
      console.log(node, "->", this.list[node].join(", "));
    }
  }
}

let g = new Graph();

g.addNode("A");
g.addNode("B");
g.addNode("C");

g.addEdge("A", "B");
g.addEdge("A", "C");

console.log(g.printGraph());
