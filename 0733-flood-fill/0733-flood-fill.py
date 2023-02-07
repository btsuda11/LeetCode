class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        m = len(image)
        n = len(image[0])
        def dfs(image, sr, sc, color, prev_color):
            if sr < 0 or sr == m or sc < 0 or sc == n or image[sr][sc] == color or image[sr][sc] != prev_color:
                return image
            else:
                pixel = image[sr][sc]
                image[sr][sc] = color
                dfs(image, sr + 1, sc, color, pixel)
                dfs(image, sr - 1, sc, color, pixel)
                dfs(image, sr, sc + 1, color, pixel)
                dfs(image, sr, sc - 1, color, pixel)
            return image
        return dfs(image, sr, sc, color, image[sr][sc])