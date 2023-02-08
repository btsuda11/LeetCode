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
        
        
        curr_sum = 0
        q = deque([(root, False)])        
        while q:   
            node, isLeft = q.popleft()
            if isLeft and (node.left == None and node.right == None):
                curr_sum += node.val
            if node.left:
                q.append((node.left, True))
            if node.right:
                q.append((node.right, False))
        return curr_sum
        
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