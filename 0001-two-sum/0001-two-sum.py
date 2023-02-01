class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indices = {}
        for i in range(len(nums)):
            comp = target - nums[i]
            if comp in indices:
                return [i, indices[comp]]
            else:
                indices[nums[i]] = i
                