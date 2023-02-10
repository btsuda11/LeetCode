# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        def isIdentical(p, q):
            if p == None and q == None:
                return True
            if p == None or q == None:
                return False
            if p.val != q.val:
                return False
            return isIdentical(p.left, q.left) and isIdentical(p.right, q.right)
        if root == None:
            return False
        if isIdentical(root, subRoot):
            return True
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)
        