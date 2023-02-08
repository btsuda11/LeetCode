# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque

class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        # def dfs(root):
        #     if root == None:
        #         return 0
        #     if root.left and root.left.left == None and root.left.right == None:
        #         return root.left.val + dfs(root.right)
        #     else:
        #         return dfs(root.left) + dfs(root.right)
        # return dfs(root)
        
        
        q, ans = deque([(root, False)]), 0
        while q:
            cur, isLeft = q.popleft()
            if not cur.left and not cur.right and isLeft:
                ans = ans + cur.val
            if cur.right:
                q.append((cur.right, False))
            if cur.left: 
                q.append((cur.left, True))
        return ans
        
        #     3
        #     /\
        #     9  20
        # /   \   /   \
        # 12  5 7   15
        
        #      1
        #     / \
        #     n  2
        
# define a bfs function that will take in a node
# traverse level by level and check if the current node is a leaf and if it is an even index on the current level