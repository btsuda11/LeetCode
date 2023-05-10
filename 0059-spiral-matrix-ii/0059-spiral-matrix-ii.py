class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        i = 1
        left, top = 0, 0
        right, bottom = n, n
        matrix = [[0 for i in range(n)] for i in range(n)]
        while left <= right and top <= bottom:
            for j in range(left, right):
                matrix[top][j] = i
                i += 1
            top += 1
            for j in range(top, bottom):
                matrix[j][right - 1] = i
                i += 1
            right -= 1
            for j in range(right - 1, left - 1, -1):
                matrix[bottom - 1][j] = i
                i += 1
            bottom -= 1
            for j in range(bottom - 1, top - 1, -1):
                matrix[j][left] = i
                i += 1
            left += 1
        return matrix