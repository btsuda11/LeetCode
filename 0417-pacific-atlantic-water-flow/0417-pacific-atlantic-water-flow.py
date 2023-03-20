class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        m = len(heights)
        n = len(heights[0])
        pac = set()
        atl = set()
        def dfs(r, c, visited, prev_height):
            if r < 0 or c < 0 or r >= m or c >= n:
                return
            if (r, c) in visited:
                return
            if heights[r][c] < prev_height:
                return
            visited.add((r, c))
            dfs(r + 1, c, visited, heights[r][c])
            dfs(r - 1, c, visited, heights[r][c])
            dfs(r, c + 1, visited, heights[r][c])
            dfs(r, c - 1, visited, heights[r][c])
            
            
        for i in range(m):
            dfs(i, 0, pac, heights[i][0])
            dfs(i, n - 1, atl, heights[i][n - 1])
            
        for j in range(n):
            dfs(0, j, pac, heights[0][j])
            dfs(m - 1, j, atl, heights[m - 1][j])

                    
        return list(pac & atl)