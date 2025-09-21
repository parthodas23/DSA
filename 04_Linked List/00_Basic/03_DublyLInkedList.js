class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null; // dubly linked list has 2 pointer
  }
}

class DublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current;
    let count;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (index !== count) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (index !== current) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, value) {
    const find = this.get(index);
    if (find) {
      find.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);
    const found = this.get(index - 1);
    if (found) {
      let next = found.next;
      found.next = newNode;
      newNode.prev = found;
      newNode.next = next;
      next.prev = newNode;
    }

    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const found = this.get(index);
    if (found) {
      let nxt = found.next;
      let past = found.prev;
      past.next = nxt;
      nxt.prev = past;

      found.next = null;
      found.prev = null;
    }
    this.length--;
  }
}

const list = new DublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
// list.pop();
// list.pop();
// list.pop();
// console.log(list.unshift(5));
// console.log(list.get(2));
// console.log(list.set(0, 5));
// list.insert(1, 15);
list.remove(1);

console.log(list);
