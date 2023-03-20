class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        m = len(matrix)
        n = len(matrix[0])
        def mark(r, c):
            for i in range(m):
                if matrix[i][c] != 0:
                    matrix[i][c] = None
            for j in range(n):
                if matrix[r][j] != 0:
                    matrix[r][j] = None
        
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 0:
                    mark(i, j)
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == None:
                    matrix[i][j] = 0
                    