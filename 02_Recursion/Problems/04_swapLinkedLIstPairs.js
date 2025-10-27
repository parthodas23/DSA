var swapPairs = function (head) {
  if (!head || !head.next) return head; // head, head.next=null then return null
  let first = head; // this is 1
  let second = head.next; // 2

  first.next = swapPairs(second.next); // 1.next= swapPairs(3)  --> head=3, second=4.next=null so
  // 3.next=null
  second.next = first; // 4.next=3  4->3->null
  // now 1.next=3,  2.next=1   so it becomes 2->1->4->3->null

  return second;
};
