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

const preorderTraversal = root => {
    const answer = [];
    const dfs = root => {
        if (!root) return;
        answer.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return answer;
};