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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = (root, low, high) => {
    let sum = 0;
    const dfs = (root, low, high) => {
        if (!root) return;
        if (root.val >= low && root.val <= high) sum += root.val;
        dfs(root.left, low, high);
        dfs(root.right, low, high);
    }
    dfs(root, low, high);
    return sum;
};