/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let result = head;

    while (head && head.next) {
        if (head.val === head.next.val) {
            head.next = head.next.next;
        } else {
            head = head.next; 
        }
    }

    return result;
};