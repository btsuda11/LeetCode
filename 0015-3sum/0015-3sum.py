class Solution:
    def twoSum(self, nums: List[int], i: int, res: List[List[int]]):
        left = i + 1
        right = len(nums) - 1
        while left < right:
            sum = nums[i] + nums[left] + nums[right]
            if sum == 0:
                res.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
            elif sum > 0:
                right -= 1
            else:
                left += 1
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        
        for i in range(len(nums)):
            if nums[i] > 0:
                break
            if i == 0 or nums[i] != nums[i - 1]:
                self.twoSum(nums, i, res)
        return res