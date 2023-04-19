# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        self.path_length = 0
        def dfs(root, goLeft, length = 0):
            if root == None:
                return
            else:
                self.path_length = max(self.path_length, length)
                if goLeft:
                    dfs(root.left, False, length + 1)
                    dfs(root.right, True, 1)
                else:
                    dfs(root.right, True, length + 1)
                    dfs(root.left, False, 1)
        dfs(root, True)
        dfs(root, False)
        return self.path_length

        