const graph = {
  A: ["B", "C"], // A connects to B and C
  B: ["A"], // B connects to A
  C: ["A"], // C connects to A
}; // --> this is a graph

console.log(graph);
