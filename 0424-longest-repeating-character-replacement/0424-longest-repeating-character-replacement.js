/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const mostFreqCount = map => {
    let count = 0;
    Object.values(map).forEach(num => {
      count = Math.max(count, num);  
    })
    return count;
}

const characterReplacement = (s, k) => {
    let longest = 0;
    let l = 0;
    let count = {};
    for (let r = 0; r < s.length; r++) {
        count[s[r]] = count[s[r]] + 1 || 1;
        while (r - l + 1 - mostFreqCount(count) > k) {
            count[s[l]] -= 1;
            l++;
        }
        longest = Math.max(longest, r - l + 1);
    }
    return longest;
};