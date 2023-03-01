class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        n = len(nums)
        numSet = set(nums)
        arr = []
        for i in range(1, n + 1):
            if i not in numSet:
                arr.append(i)
                
        return arr