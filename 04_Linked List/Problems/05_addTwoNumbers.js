const addTwoNumbers = (l1, l2) => {
  let dummy = new ListNode(0); // this is how we create a new list
  let curr = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10); // carry -> 7+8=15, carry = 1
    curr.next = new ListNode(sum % 10); // digit to add --> 15%10 = 5
    curr = curr.next;
  }

  return dummy.next;
};
