# @param {Integer[][]} image
# @param {Integer} sr
# @param {Integer} sc
# @param {Integer} color
# @return {Integer[][]}
def flood_fill(image, sr, sc, color)
    originalColor = image[sr][sc]
    def dfs(r, c, originalColor, image, color)
        if r < 0 || c < 0 || r >= image.length || c >= image[0].length
            return
        end
        currColor = image[r][c]
        if currColor != originalColor || currColor == color
            return
        end
        image[r][c] = color
        dfs(r + 1, c, originalColor, image, color)
        dfs(r - 1, c, originalColor, image, color)
        dfs(r, c + 1, originalColor, image, color)
        dfs(r, c - 1, originalColor, image, color)
    end
    dfs(sr, sc, originalColor, image, color)
    return image
end