function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  //找到第一个不为val的节点
  while (head) {
    if (head.val == val) {
      head = head.next;
    } else {
      break;
    }
  }
  if (!head) return head;
  var h = head;
  while (h.next) {
    if (h.next.val == val) {
      h.next = h.next.next;
    } else {
      h = h.next;
    }
  }
  return head;
};
