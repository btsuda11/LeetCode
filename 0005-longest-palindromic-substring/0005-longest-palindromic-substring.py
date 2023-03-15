class Solution:
    def longestPalindrome(self, s: str) -> str:
        longest = ''
        def findLongestPalindrome(s, i, j):
            while i >= 0 and j < len(s) and s[i] == s[j]:
                i -= 1
                j += 1
            return s[i + 1:j]
        for i in range(len(s)):
            oneLetter = findLongestPalindrome(s, i, i)
            twoLetter = findLongestPalindrome(s, i, i + 1)
            if len(oneLetter) > len(twoLetter):
                longer = oneLetter
            else:
                longer = twoLetter
            if len(longer) > len(longest):
                longest = longer
        return longest