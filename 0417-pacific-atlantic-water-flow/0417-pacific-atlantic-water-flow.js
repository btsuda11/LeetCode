/**
 * @param {number[][]} heights
 * @return {number[][]}
 */


const pacificAtlantic = heights => {
    const res = [];
    const m = heights.length;
    const n = heights[0].length;
    const pac = new Set();
    const atl = new Set();
    
    const dfs = (r, c, visit, prevHeight) => {
        if (Math.min(r, c) < 0 || r >= m || c >= n || heights[r][c] < prevHeight || visit.has(r + '-' + c))             return;
        visit.add(r + '-' + c) // Valid entries gets added to set
        dfs(r + 1, c, visit, heights[r][c]) // Checks neighbors
        dfs(r - 1, c, visit, heights[r][c])
        dfs(r, c + 1, visit, heights[r][c])
        dfs(r, c - 1, visit, heights[r][c])
    }
    
    for (let c = 0; c < n; c++) { 
        dfs(0, c, pac, heights[0][c]) // Top
        dfs(m - 1, c, atl, heights[m - 1][c]) // Bottom
    }

    for (let r = 0; r < m; r++) { 
        dfs(r, 0, pac, heights[r][0]) // Left
        dfs(r, n - 1, atl, heights[r][n - 1]) // Right
    }

    for (let r = 0; r < m; r++) { // Checks for collisions
        for (let c = 0; c < n; c++) {
            if (pac.has(r + '-' + c) && atl.has(r + '-' + c)) { // If both sets have the same values
                res.push([r,c]) // Push coord to res
            }
        }
    }
    return res;
};