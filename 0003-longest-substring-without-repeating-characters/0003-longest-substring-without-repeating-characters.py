class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        chars = set()
        longest = 0
        left, right = 0, 0
        while right < len(s):
            if s[right] not in chars:
                chars.add(s[right])
            else:
                while s[left] != s[right]:
                    chars.remove(s[left])
                    left += 1
                left += 1
            longest = max(longest, right - left + 1)
            right += 1

        return longest
        
        # keep track of the window's chars in a set
        # keep track of the longest substring
        # use sliding window
        # if the char is not in the set, add it
        # if the char is in the set, increment left until you hit the same char
        # update the set as needed