function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {number}
 */
//就累加呗
var getDecimalValue = function (head) {
  if (!head) return 0;
  var sum = 0;
  while (head) {
    sum *= 2;
    sum += head.val;
    head = head.next;
  }
  return sum;
};
