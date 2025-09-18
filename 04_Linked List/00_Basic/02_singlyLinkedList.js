class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // initially, no next node
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
      // if head doesn't exist then head and tail would be same
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // tail = 10.next = 20 , this help move the tail
      this.tail = newNode; // tail=10 tail would be same as before
    }

    this.length++;
    return this; // it's return the hole linked list
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current; // prev is always behaind to current
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null; // set there are no value would be left
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    let current = temp.next;
    this.head = current;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
  unShift(value) {
    let val = new Node(value); // create the value as linked list
    if (!this.head) {
      // no head then tail/head would be same
      this.head = val;
      this.tail = val;
    } else {
      val.next = this.head;
      this.head = val; // set head to this value
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, value) {
    // let found = this.get(index);
    // if (found) {
    //   found.value = value;
    //   return true;
    // }
    // return false;

    if (index < 0 || index > this.length) return false;

    let count = 0;
    let current = this.head;

    while (count < index) {
      current = current.next;
      count++;
    }
    current.value = value; // here we update exact value so that we don't have ponit to anything
    return true;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unShift(value); // console.log(!'hi')--> false
    if (this.length === index) return !!this.push(value); // but console.log(!!'hi')--> true

    let newNode = new Node(value);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (this.length - 1 === index) return !!this.pop();
    if (this.length === 0) return !!this.shift();

    let prev = this.get(index - 1);
    let remove = prev.next;
    let current = remove.next;
    prev.next = current;
    this.length--;
    return remove;
  }
  reverse() {
    if (!this.head) return undefined;
    let prev = null;
    let current = this.head;
    this.tail = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev; // now prev would our head
    return this;
  }
}

// Example usage
const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.unShift(5);

// console.log(list.set(1, 15));
// console.log(list.insert(1, 15));
// console.log(list.insert(4, 25));
// console.log(list.remove(1));
console.log(list.reverse());

console.log(list);
