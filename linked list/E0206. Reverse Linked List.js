function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//链表倒置
var reverseList = function (head) {
  if (!head) return null;
  var h = head;
  var pre = null;
  while (h) {
    var next_node = new ListNode();
    next_node = h.next;
    h.next = pre;
    pre = h;
    h = next_node;
  }
  return pre;
};
