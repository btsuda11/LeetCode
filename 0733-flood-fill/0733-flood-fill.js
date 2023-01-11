/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const dfs = (image, r, c, color, newColor) => {
    if (image[r][c] === color) {
        image[r][c] = newColor;
        if (r >= 1) dfs(image, r - 1, c, color, newColor);
        if (c >= 1) dfs(image, r, c - 1, color, newColor);
        if (r + 1 < image.length) dfs(image, r + 1, c, color, newColor);
        if (c + 1 < image[0].length) dfs(image, r, c + 1, color, newColor);
    }
}

const floodFill = (image, sr, sc, color) => {
    const oldColor = image[sr][sc];
    if (oldColor !== color) dfs(image, sr, sc, oldColor, color);
    return image;
};