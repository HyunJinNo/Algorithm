/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const getCount = (node) => {
        if (node.next === null) {
            return 1;
        } else {
            return 1 + getCount(node.next);
        }
    };

    const count = getCount(head);
    const temp = new ListNode(0);
    temp.next = head;

    const solution = (node, currentCount) => {
        if (currentCount === n) {
            node.next = node.next.next;
        } else {
            solution(node.next, currentCount - 1);
        }
    };

    solution(temp, count);
    return temp.next;
};