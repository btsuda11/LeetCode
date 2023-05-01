class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        count = 0
        l = 0
        for r in range(len(nums)):
            if nums[r] != val:
                count += 1
                [[nums[l], nums[r]]] = [[nums[r], nums[l]]]
                l += 1
                print(nums)
        return count
                