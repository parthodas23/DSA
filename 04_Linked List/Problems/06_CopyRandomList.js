const copy = (head) => {
  if (!head) return null;
  let nodeMap = new Map();

  let dummy = new _Node(0);
  let copyCurr = dummy;

  let curr = head;
  while (curr) {
    let newNode = new _Node(curr.val);
    nodeMap.get(curr, newNode);

    copyCurr.next = newNode;
    copyCurr = copyCurr.next;
    curr = curr.next;
  }

  copyCurr = dummy.next;
  curr = head;
  while (curr) {
    if (curr.random) {
      copyCurr.random = nodeMap.get(curr.random); // this random is a corrospoinding copied random value
    }

    copyCurr = copyCurr.next;
    curr = curr.next;
  }
  return dummy.next;
};
