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
const minDepth = root => {
    let depth = 0;
    if (!root) return 0;
    const queue = [root];
    while (queue.length > 0) {
        depth++;
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            if (!node.left && !node.right) return depth;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

};