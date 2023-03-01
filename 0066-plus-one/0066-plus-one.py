class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        carry = 0
        for i in range(len(digits) - 1, -1, -1):
            digit = digits[i]
            if i == 0 and digit == 9:
                digits[i] = 0
                digits = [1] + digits
            elif i != 0 and digit == 9:
                carry = 1
                digits[i] = 0
            elif i == len(digits) - 1:
                digits[i] += 1
                break
            elif i != len(digits) - 1:
                digits[i] += carry
                break
        return digits