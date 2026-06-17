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
var inorderTraversal = function(root) {
    const answer = [];

    const solution = (root) => {
        if (root === null) {
            return;
        }

        solution(root.left);
        answer.push(root.val);
        solution(root.right);
    };    

    solution(root);

    return answer;
};