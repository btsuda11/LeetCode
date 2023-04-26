class Solution:
    def addDigits(self, num: int) -> int:
        sumDigits = (num // 10) + (num % 10)
        if sumDigits // 10 >= 1:
            return self.addDigits(sumDigits)
        else:
            return sumDigits