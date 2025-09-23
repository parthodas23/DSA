const remove = (head, n) => {
  let dummy = new ListNode(0);
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  for (let i = 0; i < n + 1; i++) {
    // n+1 ensure the gap between fast and slow like now fast= 3 step, slow=1, gap = 2 = nth node
    fast = fast.next;

  }
  while (fast) {
    slow = slow.next; // this way slow reach previous node of nth node
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};
