class Solution:
    def findMin(self, nums: List[int]) -> int:
        minimum = float('inf')
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] > nums[right]:
                left = mid + 1
            else:
                minimum = min(minimum, nums[mid])
                right = mid - 1
        return minimum
        