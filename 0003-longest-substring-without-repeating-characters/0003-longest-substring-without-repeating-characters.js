/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let longest = 0;
    let counter = new Map();
    let l = 0;
    for (var right = 0; right < s.length; ++right) {
        const cur = s[right];
        counter.set(cur, (counter.has(cur))? counter.get(cur)+1: 1);
        while (counter.get(cur) > 1) {
            counter.set(s[l], counter.get(s[l])-1);
            ++l;
        }
        longest = Math.max(longest, right-l+1);
    }
    return longest;
}