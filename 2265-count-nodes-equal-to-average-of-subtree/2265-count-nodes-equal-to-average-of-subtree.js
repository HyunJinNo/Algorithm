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
 * @return {number}
 */
var averageOfSubtree = function(root) {
    let answer = 0;

    const solution = (node) => {
        if (!node) {
            return [0, 0];
        }

        const [leftSum, leftCount] = solution(node.left);
        const [rightSum, rightCount] = solution(node.right);
        const totalSum = leftSum + rightSum + node.val;
        const totalCount = leftCount + rightCount + 1;

        if (Math.floor(totalSum / totalCount) === node.val) {
            answer++;
        }

        return [totalSum, totalCount];
    }
    
    solution(root);
    return answer;
};