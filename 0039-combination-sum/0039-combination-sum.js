/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const dfs = (start, candidates, target, res, path) => {
    if (target < 0) return;
    if (target === 0) {
        res.push([...path]);
        return;
    }
    for (let i = start; i < candidates.length; i++) {
        const num = candidates[i];
        path.push(num);
        dfs(i, candidates, target - num, res, path);
        path.pop();
    }
}

const combinationSum = (candidates, target) => {
    const res = [];
    dfs(0, candidates, target, res, []);
    return res;
};