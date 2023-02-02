class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        left, right, letter = 0, len(letters) - 1, letters[0]
        while left <= right:
            mid = left + (right - left) // 2
            if target < letters[mid]:
                letter = letters[mid]
                right = mid - 1
            else:
                left = mid + 1
        return letter
                
                