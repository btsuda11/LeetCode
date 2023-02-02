class Solution:
    def mySqrt(self, x: int) -> int:
        left, right = 0, x
        root = 0
        while left <= right:
            mid = left + (right - left) // 2
            if mid * mid <= x:
                root = mid
                left = mid + 1
            else:
                right = mid - 1
        return root