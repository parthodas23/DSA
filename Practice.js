class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return null;
    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  shift() {
    if (!this.head) return undefined;

    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
  unshift(value) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const newNode = new Node(value);
      let current = this.head;
      this.head = newNode;
      newNode.next = current;
    }

    this.length++;
  }
  get(index) {
    if (index < 0 || index > this.length) return undefined;

    let current = this.head;
    let count = 0;
    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(index, value) {
    if (index < 0 || index > this.length) return undefined;

    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    current.value = value;

    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;

    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;

    if (index === 0) return !!this.shift();
    if (index === this.length) return !!this.pop();

    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = prev.next.next;
    temp.next = null;
    this.length--;

    return true;
  }
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.unshift(5);

// console.log(list.get(2));
// list.shift();
// list.shift();
// list.set(1, 9);
// list.insert(1, 15);
// list.insert(0, 1);
list.remove(1);
console.log(list);
