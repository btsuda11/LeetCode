/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
    let left = right = longest = 0;
    const count = new Map();
    while (right < s.length) {
        const curr = s[right];
        count.set(curr, count.has(curr) ? count.get(curr) + 1 : 1);
        while (count.get(curr) > 1) {
            count.set(s[left], count.get(s[left]) - 1);
            left++;
        }
        longest = Math.max(longest, right - left + 1);
        right++;
    }
    return longest;
};