/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    const answer = [];

    const solution = (node) => {
        if (node?.val === undefined) {
            return;
        }

        answer.push(node.val);
        solution(node.left);
        solution(node.right);
    };

    solution(root);
    return answer;
};