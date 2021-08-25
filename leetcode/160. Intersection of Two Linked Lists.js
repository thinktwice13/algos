// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const memo = new Set();

  let a = headA;
  while (a) {
    memo.add(a);
    a = a.next;
  }

  let b = headB;
  while (b) {
    if (memo.has(b)) return b;
    b = b.next;
  }

  return null;
};

// O1 space solution: To avoid hashing visited nodes, connect llists to make a cycle
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let [a, b] = [headA, headB];
  while (a !== b) {
    // a = a?.next ?? headB;
    // b = b?.next ?? headA;
    a = a === null ? headB : a.next; // When a finishes, cotinue with b
    b = b === null ? headA : b.next; // When b finished, continue with a
  }

  return a; // || b
};
