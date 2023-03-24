class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        minNum = math.inf
        maxDiff = 0
        for i in range(len(nums)):
            minNum = min(minNum, nums[i])
            maxDiff = max(maxDiff, nums[i] - minNum)
        if maxDiff == 0:
            return -1
        else:
            return maxDiff