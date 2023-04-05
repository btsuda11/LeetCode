class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left, right = 0, 0
        longest = 0
        count = {}
        most_freq_char = 0
        while right < len(s):
            if s[right] in count:
                count[s[right]] += 1
            else:
                count[s[right]] = 1
            window_length = right - left + 1
            most_freq_char = max(most_freq_char, count[s[right]])
            if window_length - most_freq_char <= k:
                longest = max(longest, window_length)
            if window_length - most_freq_char > k:
                count[s[left]] -= 1
                left += 1
            right += 1
        return longest