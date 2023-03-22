class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        prevMax = nums[0]
        prevMin = nums[0]
        maxProd = nums[0]
        for i in range(1, len(nums)):
            num = nums[i]
            options = [num, num * prevMax, num * prevMin]
            prevMax = max(options)
            prevMin = min(options)
            maxProd = max(maxProd, prevMax)
        return maxProd