class MinStack {
  constructor() {
    this.stack = [];
    this.minstack = [];
  }
  push(val) {
    this.stack.push(val);
    if (
      this.minstack.length === 0 ||
      val <= this.minstack[this.minstack.length - 1]
    ) {
      this.minstack.push(val);
    }
  }
  pop() {
    let poped = this.stack.pop();
    if (poped === this.minstack[this.minstack.length - 1]) {
      this.minstack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minstack[this.minstack.length - 1];
  }
}
