class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
// linking nodes --> 3--> 2--> 1
node3.next = node2;
node2.next = node1;

// how to trevese
let current = node3;
while (current !== null) {
  console.log(
    "Node Value",
    current.val,
    "Next point to",
    current.next ? current.next.val : null
  );
  current = current.next; // move toward
}

// Pointer Manupulation
let newNode = new ListNode(4);
newNode.next = node1.next; // 4.next = null
node1.next = newNode; // 1 --> 4

console.log("---------------");
let current1 = node3;
while (current1 !== null) {
  console.log(
    "Node Value",
    current1.val,
    "Next point to",
    current1.next ? current1.next.val : null
  );
  current1 = current1.next; // move toward
}
