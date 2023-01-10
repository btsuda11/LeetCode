/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
    const neededChars = {};
    const res = [];
    for (let i = 0; i < p.length; i++) {
        neededChars[p[i]] = neededChars[p[i]] + 1 || 1;
    }
    
    let left = right = 0;
    let count = p.length;
    while (right < s.length) {
        if (neededChars[s[right]] > 0) count--;
        neededChars[s[right]]--;
        right++;
        if (count === 0) res.push(left);
        if (right - left === p.length) {
            if (neededChars[s[left]] >= 0) count++;
            neededChars[s[left]]++;
            left++;
        }
    }
    return res;
};