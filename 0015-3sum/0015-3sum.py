class Solution:
    def twoSum(self, nums: List[int], i: int, res: List[List[int]]):
        left = i + 1
        right = len(nums) - 1
        while left < right:
            if nums[i] + nums[left] + nums[right] == 0:
                res.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
            elif nums[i] + nums[left] + nums[right] > 0:
                right -= 1
            else:
                left += 1
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        pivot = 0
        
        while pivot < len(nums):
            totalSum = nums[pivot]
            if totalSum > 0:
                break
            if pivot == 0 or nums[pivot] != nums[pivot - 1]:
                self.twoSum(nums, pivot, res)
            pivot += 1
        return res