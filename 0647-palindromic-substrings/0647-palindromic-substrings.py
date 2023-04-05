class Solution:
    def countSubstrings(self, s: str) -> int:
        total = 0
        
        def count(i, j):
            count = 0
            while i >= 0 and j < len(s) and s[i] == s[j]:
                i -= 1
                j += 1
                count += 1
            return count
        
        for i in range(len(s)):
            total += count(i, i)
            total += count(i, i + 1)
        return total