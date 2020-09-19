function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//很妙，数学优化
function listLength(head) {
  var length = 0;
  while (head) {
    length++;
    head = head.next;
  }
  return length;
}
var getIntersectionNode = function (headA, headB) {
  var h1 = headA;
  var h2 = headB;
  if (!h1 || !h2) return null;
  var length = listLength(headA) + listLength(headB);
  for (var i = 0; i < length; i++) {
    if (h1 == h2) return h1;
    h1 = h1.next ? h1.next : headB;
    h2 = h2.next ? h2.next : headA;
  }
  return null;
};
