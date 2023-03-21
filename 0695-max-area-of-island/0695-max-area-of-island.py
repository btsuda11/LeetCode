class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])
        maxSize = 0
        def sizeIsland(grid, i, j):
            if i < 0 or j < 0 or i >= m or j >= n:
                return 0
            if grid[i][j] == 0:
                return 0
            grid[i][j] = 0
            return sizeIsland(grid, i + 1, j) + sizeIsland(grid, i, j + 1) + sizeIsland(grid, i - 1, j) + sizeIsland(grid, i, j - 1) + 1
            
            
        for i in range(m):
            for j in range(n):
                size = sizeIsland(grid, i, j)
                maxSize = max(maxSize, size)
        return maxSize