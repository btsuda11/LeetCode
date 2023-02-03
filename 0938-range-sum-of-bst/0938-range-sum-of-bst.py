# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        def dfs(root, sum):
            if root == None:
                return 0
            elif root.val < low:
                return dfs(root.right, sum)
            elif root.val > high:
                return dfs(root.left, sum)
            elif low <= root.val and root.val <= high:
                return root.val + dfs(root.left, sum) + dfs(root.right, sum)
        return dfs(root, 0)