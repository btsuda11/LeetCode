class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        n = len(nums) / 2
        count = {}
        for num in nums:
            if num not in count:
                count[num] = 1
            else:
                count[num] += 1
            if count[num] > n:
                return num