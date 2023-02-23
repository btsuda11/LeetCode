class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        leftSide, rightSide = [1 for i in range(len(nums))], [1 for i in range(len(nums))]
        for i in range(len(nums)):
            if i != 0:
                leftSide[i] = leftSide[i - 1] * nums[i - 1]
        for i in range(len(nums) - 1, -1, -1):
            if i != len(nums) - 1:
                rightSide[i] = rightSide[i + 1] * nums[i + 1]
        return [leftSide[i] * rightSide[i] for i in range(len(nums))]
            