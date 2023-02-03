# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        vals = set()
        def dfs(root):
            if root == None:
                return False
            comp = k - root.val
            if comp in vals:
                return True
            else:
                vals.add(root.val)
                return dfs(root.left) or dfs(root.right)
        return dfs(root)