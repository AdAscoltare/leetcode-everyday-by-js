function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
//和下一节点交换，然后删除
var deleteNode = function (node) {
  var t = node.next;
  var v = node.val;
  node.val = t.val;
  t.val = v;
  node.next = node.next.next;
};
