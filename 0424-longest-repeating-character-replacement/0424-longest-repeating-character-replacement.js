/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
    let mostFreqCount = 0;
    let longest = 0;
    let l = 0;
    let count = {};
    for (let r = 0; r < s.length; r++) {
        count[s[r]] = count[s[r]] + 1 || 1;
        mostFreqCount = Math.max(mostFreqCount, count[s[r]]);
        if (r - l + 1 - mostFreqCount > k) {
            count[s[l]] -= 1;
            l++;
        }
        longest = Math.max(longest, r - l + 1);
    }
    return longest;
};