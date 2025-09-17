class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
const c1 = new ListNode(3);
const c2 = new ListNode(2);
const c3 = new ListNode(0);
const c4 = new ListNode(-4);
c1.next = c2;
c2.next = c3;
c3.next = c4;
c4.next = c2; // this the cycle

console.log(hasCycle(c1));
