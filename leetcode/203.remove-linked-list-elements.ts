/*
 * @lc app=leetcode id=203 lang=typescript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(0, head)
  let cur = dummy
  while(cur?.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
      continue
    } else {
      cur = cur.next
    }
  }
  return dummy.next
};
// @lc code=end

