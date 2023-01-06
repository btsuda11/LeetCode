/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalindrome = word => {
    let low = 0, high = word.length - 1;
    while (low < high) {
        if (word[low] !== word[high]) return false;
        low++;
        high--;
    }
    return true;
}

const partition = s => {
    let ans = [];
    const dfs = (start, path) => {
        if (start === s.length) {
            ans.push([...path]);
            return;
        }
        
        for (let end = start + 1; end < s.length + 1; end++) {
            const sub = s.substring(start, end);
            if (isPalindrome(sub)) {
                path.push(sub);
                dfs(end, path);
                path.pop();
            }
        }
    }
    dfs(0, []);
    return ans;
};