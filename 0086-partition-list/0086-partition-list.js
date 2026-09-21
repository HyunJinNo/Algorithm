/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    const list1 = new ListNode();
    const list2 = new ListNode();
    let head1 = list1;
    let head2 = list2;

    while (head !== null) {
        if (head.val < x) {
            head1.next = head;
            head1 = head1.next;
        } else {
            head2.next = head;
            head2 = head2.next;
        }

        head = head.next;
    }

    head1.next = list2.next;
    head2.next = null;

    return list1.next;
};