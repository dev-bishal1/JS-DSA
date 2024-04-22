class MinStack {
  constructor() {
    this.stack = {};
    this.length = 0;
    this.minStack = {};
    this.minStackLength = 0;
  }

  push(value) {
    this.stack[this.length] = value;
    if (
      this.minStackLength === 0 ||
      value <= this.minStack[this.minStackLength - 1]
    ) {
      this.minStack[this.minStackLength] = value;
      this.minStackLength += 1;
    }
    this.length += 1;
  }

  pop() {
    const lastItem = this.stack[this.length - 1];
    if (lastItem === this.minStack[this.minStackLength - 1]) {
      delete this.minStack[this.minStackLength - 1];
      this.minStackLength -= 1;
    }
    delete this.stack[this.length - 1];
    this.length -= 1;
  }

  top() {
    return this.stack[this.length - 1];
  }

  getMin() {
    return this.minStack[this.minStackLength - 1];
  }
}

// ["MinStack", "push", "push", "push", "getMin", "pop", "getMin"];
// [[], [0], [1], [0], [], [], []];

const stack = new MinStack();
stack.push(0);
stack.push(1);
stack.push(0);
stack.getMin();
stack.pop();
stack.getMin();
