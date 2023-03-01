class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        pivot = 0
        left = 1
        right = len(nums) - 1
        while pivot < len(nums):
            totalSum = nums[pivot]
            if totalSum > 0:
                break
            while left < right:
                if totalSum + nums[left] + nums[right] == 0 and [nums[pivot], nums[left], nums[right]] not in res:
                    res.append([nums[pivot], nums[left], nums[right]])
                    left += 1
                    right -= 1
                elif totalSum + nums[left] + nums[right] > 0:
                    right -= 1
                else:
                    left += 1
            pivot += 1
            left = pivot + 1
            right = len(nums) - 1
        return res