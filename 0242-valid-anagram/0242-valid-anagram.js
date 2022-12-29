/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    const countS = {};
    const countT = {};
    for(let i = 0; i < s.length; i++) {
        countS[s[i]] = (countS[s[i]] || 0) + 1;
    }
    for(let i = 0; i < t.length; i++) {
        countT[t[i]] = (countT[t[i]] || 0) + 1;
    }
    return _.isEqual(countS, countT);
};