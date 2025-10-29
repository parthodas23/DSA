// const remove = (head, n) => {
//   let dummy = new ListNode(0);
//   dummy.next = head;
//   let slow = dummy;
//   let fast = dummy;
//   for (let i = 0; i < n + 1; i++) {
//     // n+1 ensure the gap between fast and slow like now fast= 3 step, slow=1, gap = 2 = nth node
//     fast = fast.next;

//   }
//   while (fast) {
//     slow = slow.next; // this way slow reach previous node of nth node
//     fast = fast.next;
//   }
//   slow.next = slow.next.next;
//   return dummy.next;
// };

const removeNthNode = (head) => {
  let curr = head;
  let count = 0;
  while (curr) {
    curr = curr.next;
    count++;
  }

  if (count === n) {
    // means the Nth from last is head
    return head.next;
  }

  let prevIndex = count - n - 1;
  let node = head;
  for (let i = 0; i < prevIndex; i++) {
    node = node.next;
  }

  node.next = node.next = next;

  return head;
};
