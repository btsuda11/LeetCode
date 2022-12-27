/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = s => {
    const set = new Set();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            count += 2;
            set.delete(s[i]);
        } else {
            set.add(s[i]);
        }
    }
    if (set.size > 0) count++;
    return count;
};