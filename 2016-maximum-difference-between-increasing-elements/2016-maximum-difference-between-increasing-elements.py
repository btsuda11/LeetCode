class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        left, right = 0, 1
        maxDiff = -1
        while right < len(nums):
            diff = nums[right] - nums[left]
            if diff <= 0:
                left = right
            else:
                maxDiff = max(maxDiff, diff)
            right += 1
        return maxDiff