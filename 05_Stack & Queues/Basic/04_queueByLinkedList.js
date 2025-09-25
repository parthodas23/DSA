class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) { // a value would be add at end but remove time it's ge remove a begening
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;

    return this;
  }

  dequeue() {
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

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue());
console.log(q);
