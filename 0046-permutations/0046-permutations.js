/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const permute = nums => {
    const dfs = (startIndex, used, path, res) => {
        if (startIndex === nums.length) {
            res.push([...path]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            path.push(nums[i]);
            used[i] = true;
            dfs(startIndex + 1, used, path, res);
            path.pop();
            used[i] = false;
        }
    }
    const res = [];
    dfs(0, new Array(nums.length).fill(false), [], res);
    return res;
};