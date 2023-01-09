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
const levelOrder = root => {
    let queue = [root];
    let ans = [];
    if (!root) return ans;
    while (queue.length > 0) {
        const n = queue.length;
        let newLevel = [];
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            newLevel.push(node.val);
            [node.left, node.right].forEach(child => {
                if (child) queue.push(child);  
            })
        }
        ans.push(newLevel);
    }
    return ans;
};