/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

const arrToTree = (preorder, map, pix, ileft, iright) => {
    const rootVal = preorder[pix];
    const root = new TreeNode(rootVal);
    const imid = map.get(rootVal);
    if (imid > ileft) {
        root.left = arrToTree(preorder, map, pix + 1, ileft, imid - 1);
    }
    if (imid < iright) {
        root.right = arrToTree(preorder, map, pix + imid - ileft + 1, imid + 1, iright);
    }
    return root;
}

const buildTree = (preorder, inorder) => {
    const map = new Map();
    
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    
    return arrToTree(preorder, map, 0, 0, inorder.length - 1);
};