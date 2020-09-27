/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.min = Infinity;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack[this.stack.length] = x;
  this.min = x < this.min ? x : this.min;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.min == this.stack[this.stack.length - 1]) {
    this.min = Infinity;
    for (var i = 0; i < this.stack.length - 1; i++) {
      this.min = this.stack[i] < this.min ? this.stack[i] : this.min;
    }
  }

  this.stack.splice(this.stack.length - 1, 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
