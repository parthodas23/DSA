let deleteDuplicates = function (head) {
  let current = head;

  while (current !== null && current.next !== null) {
    // check both
    if (current.val === current.next.val) {
      current.next = current.next.next; // skip duplicate
    } else {
      current = current.next; // move forward
    }
  }

  return head;
};
