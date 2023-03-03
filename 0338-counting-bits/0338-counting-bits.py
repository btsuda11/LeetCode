class Solution:
    def countBits(self, n: int) -> List[int]:
        arr = []
        def bitCount(n):
            count = 0
            while n > 0:
                count += (n & 1)
                n >>= 1
            return count
        for i in range(n + 1):
            arr.append(bitCount(i))
        return arr