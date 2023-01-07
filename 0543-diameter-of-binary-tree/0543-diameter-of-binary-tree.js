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
let diameter;

const longestPath = (root) => {
    if (!root) return 0;
    const leftPath = longestPath(root.left);
    const rightPath = longestPath(root.right);
    diameter = Math.max(diameter, leftPath + rightPath);
    return Math.max(leftPath, rightPath) + 1;
}

const diameterOfBinaryTree = root => {
    diameter = 0;
    longestPath(root);
    return diameter;
};