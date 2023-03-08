class Solution:
    def rob(self, nums: List[int]) -> int:
        first = nums[0:-1]
        second = nums[1:]
        if len(nums) == 1:
            return nums[0]
        print(second)
        def maxRob(nums):
            arr = [0] * len(nums)
            arr[0] = nums[0]
            if len(nums) > 1:
                arr[1] = max(nums[0], nums[1])
            for i in range(2, len(nums)):
                arr[i] = max(arr[i - 2] + nums[i], arr[i - 1])
            return arr[-1]
        return max(maxRob(first), maxRob(second))