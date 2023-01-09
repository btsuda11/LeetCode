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
 * @return {number[][]}
 */
const zigzagLevelOrder = root => {
    let ans = [];
    if (!root) return ans;
    let leftToRight = true;
    let queue = [root];
    while (queue.length > 0) {
        const n = queue.length;
        let newLevel = [];
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            if (leftToRight) newLevel.push(node.val);
            else newLevel.unshift(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        ans.push(newLevel);
        leftToRight = !leftToRight;
    }
    return ans;
};