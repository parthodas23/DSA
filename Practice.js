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
  push(value) { // o(1)
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;  // 10 --> tail/head, now 20 --> insially tai=head tail.next=next value , 10.next =20, this.tail=20
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {  //
    if (!this.head) return undefined;
    let current = this.head; // 
    let prev;
    while (current.next) {
      prev = current;
      current = current.next; // move tooward
    }

    this.tail = prev; //
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() { // 
    if (!this.head) return undefined;
    let temp = this.head; //
    this.head = this.head.next;  //
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = value;
      this.tail = value;
    }

    let current = this.head;
    this.head = newNode;
    newNode.next = current;
    this.length++;
    return;
  }
  get(index) {
    if (index < 0 || index > this.length) return null;
    let count = 0;
    let current = this.head;

    while (index !== count) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, value) {
    if (index < 0 || index > this.length) return false;
    let current = this.head;
    let count = 0;
    while (count !== index) {
      current = current.next;
      count++;
    }
    current.value = value;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length - 1) {
      return this.push(value);
    }
    let newNode = new Node(value);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return temp;
  }
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length) {
      return this.pop();
    }

    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = temp.next;
    this.length--;
    return temp;
  }

  reverse() {
    if (!this.head) return undefined;
    let prev = null;
    let current = this.head;
    this.tail = this.head;
    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
// list.pop();
// list.unshift(5);
// console.log(list.remove(1));
console.log(list.reverse());
console.log(list);
