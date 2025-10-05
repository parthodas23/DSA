class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// here we used head as a top so that we can add or remove value without treveaseing the whole linked list
class Stack {
  // here same value would be added and same value would be removed first
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // in stack we use push and pop for at the top because we don't have to trverse the hole list and it gives o(1) constant time efficiant.
  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }
  pop() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp;
  }
}

const stack = new Stack();
stack.push(23);
stack.push(100);
stack.push(200);

// stack.pop();
// stack.pop();
// stack.pop();

console.log(stack);
