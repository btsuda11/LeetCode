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
 * @param {number} k
 * @return {boolean}
 */
const findTarget = (root, k) => {
    const set = new Set();
    const dfs = (root, k) => {
        if (!root) return false;
        const complement = k - root.val;
        if (set.has(complement)) return true;
        set.add(root.val);
        return dfs(root.left, k) || dfs(root.right, k);
    }
    return dfs(root, k);
};