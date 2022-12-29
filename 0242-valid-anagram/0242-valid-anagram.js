/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    const count = {};
    for(let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
    }
    for(let i = 0; i < t.length; i++) {
        if (count[t[i]]) count[t[i]]--;
        else count[t[i]] = (count[t[i]] || 0) + 1;
    }
    return Object.values(count).every(num => num === 0);
};