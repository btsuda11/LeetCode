class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        count = {}
        if len(s) != len(t):
            return False
        for char in s:
            if char in count:
                count[char] += 1
            else:
                count[char] = 1
        for char in t:
            if char in count:
                count[char] -= 1
            else:
                return False
        for value in count.values():
            if value != 0:
                return False
        return True