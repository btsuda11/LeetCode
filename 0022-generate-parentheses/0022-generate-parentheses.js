/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
    const dfs = (startIndex, open, close, path, res) => {
        if (startIndex === 2 * n) {
            res.push(path.join(''));
            return;
        }
        
        if (open < n) {
            path.push('(');
            dfs(startIndex + 1, open + 1, close, path, res);
            path.pop();
        }
        
        if (close < open) {
            path.push(')');
            dfs(startIndex + 1, open, close + 1, path, res);
            path.pop();
        }
    }
    let res = [];
    dfs(0, 0, 0, [], res);
    return res;
};