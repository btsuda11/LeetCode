class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        num_set = set(nums)
        longest_seq = 0
        for i in range(len(nums)):
            num = nums[i]
            if num - 1 not in num_set:
                curr_seq = 1
                while num + 1 in num_set:
                    curr_seq += 1
                    num += 1
                longest_seq = max(longest_seq, curr_seq)
        return longest_seq
                