/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  var stack = [];
  ops.forEach((num) => {
    switch (num) {
      case "C": {
        stack.pop();
        break;
      }
      case "D": {
        stack.push(stack[stack.length - 1] * 2);
        break;
      }
      case "+": {
        var l = stack.length - 1;
        stack.push(stack[l] + stack[l - 1]);
        break;
      }
      default: {
        var n = parseInt(num);
        stack.push(n);
        break;
      }
    }
  });
  var sum = 0;
  stack.forEach((num) => {
    sum += num;
  });
  return sum;
};
