class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def dfs(index, path, res, nums):
            if index == len(nums):
                res.append(path.copy())
                return
            for num in nums:
                if num not in path:
                    path.append(num)
                    dfs(index + 1, path, res, nums)
                    path.pop()
        
        res = []
        dfs(0, [], res, nums)
        return res