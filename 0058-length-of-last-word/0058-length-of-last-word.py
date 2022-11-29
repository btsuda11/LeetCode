class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        words = s.split(' ')
        i = len(words) - 1
        while i >= 0:
            if words[i] != '':
                return len(words[i])
            i -= 1
        
            