// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  let s = head;
  let f = head;

  while (f.next && f.next.next) {
    s = s.next;
    f = f.next.next;
    if (s === f) return true;
  }

  return false;
};
