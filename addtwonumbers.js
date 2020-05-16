// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
 }
var addTwoNumbers = function (l1, l2) {

  let cur = new ListNode();
  let start = cur
  let sum = 0;
  let carry = 0;
  while (l1 != null || l2 != null || sum > 0) {
    if (l2 != null) {
      sum = sum + l2.val;
      l2 = l2.next
    }

    if (l1 != null) {
      sum = sum + l1.val;
      l1 = l1.next
    }

    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    }

    let node = new ListNode(sum);
    cur.next = node;
    cur = cur.next;

    sum = carry;
    carry = 0
  }
  return start.next

};
