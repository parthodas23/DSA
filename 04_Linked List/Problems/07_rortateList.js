var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  let tail = head;
  let length = 1;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  tail.next = head; // this create circle --> like last value points to head and also the prev value of last, point's to last as well

  let rotations = k % length;
  let stepsToTail = length - rotations - 1;
  let newTail = head;
  for (let i = 0; i < stepsToTail; i++) {
    newTail = newTail.next;
  }
  let newHead = newTail.next;
  newTail.next = null;
  return newHead;
};
