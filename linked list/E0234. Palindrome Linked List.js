function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//判断链表是否回文
//初级思路：先转置后半部分，然后分别遍历两部分链表
//优化：将全部值加入数组中，然后数组从两边往中间跑
//快慢指针：fast一次跑两个，slow跑一个，当fast跑完后slow到中间，然后转置slow，之后同初级思路
var isPalindrome = function (head) {
    //空算回文
  if (!head) return true;
  var arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  var length = arr.length;
  //此处不需要担心非整除
  for (var i = 0; i < length / 2; i++) {
    if (arr[i] != arr[length - 1 - i]) return false;
  }
  return true;
};
