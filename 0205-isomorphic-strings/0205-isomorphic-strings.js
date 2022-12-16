/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    const map = {};
    for(let i = 0; i < s.length; i++) {
        if (!Object.values(map).includes(t[i])) map[s[i]] = t[i];
    }
    const letters = s.split('');
    for(let i = 0; i < s.length; i++) {
        letters[i] = map[s[i]];
    }
    return letters.join('') === t;
};