/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *    this.val = (val===undefined ? 0 : val)
 *  this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *  */

var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(), l3 = result, carry = 0;

  while (l1 && l2) {
    const sum = carry + l1.val + l2.val;

    result.next = new ListNode(sum % 10);
    carry = sum > 9 ? 1 : 0;

    result = result.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1) {
    const sum = carry + l1.val;

    result.next = new ListNode(sum % 10);
    carry = sum > 9 ? 1 : 0;

    result = result.next;
    l1 = l1.next;
  }

  while (l2) {
    const sum = carry + l2.val;

    result.next = new ListNode(sum % 10);
    carry = sum > 9 ? 1 : 0;

    result = result.next;
    l2 = l2.next;
  }

  if (carry) {
    result.next = new ListNode(carry);
    result = result.next;
  }

  return l3.next;
};