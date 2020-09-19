function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//莫名其妙
//查链表中是否有一个圈
//就这？
var hasCycle = function (head) {
  var m = new Map();
  while (head) {
    if (m.has(head)) {
      return true;
    } else {
      m.set(head, 1);
    }
    head = head.next;
  }
  return false;
};
