/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
    if (t.length > s.length) return '';
    let min = Infinity;
    let minSub = '';
    let map = {};
    let need = 0;
    let l = 0;
    
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]]) {
            map[t[i]] = map[t[i]] + 1;
        } else {
            map[t[i]] = 1;
            need++;
        }
    }
    
    for (let r = 0; r < s.length; r++) {
        if (map[s[r]] !== undefined) {
            map[s[r]] -= 1;
            if (map[s[r]] === 0) need--;
        }
        while (need === 0) {
            if (map[s[l]] !== undefined) {
                if (map[s[l]] === 0) need++;
                map[s[l]] += 1;
            }
            if (s.substring(l, r + 1).length < min) minSub = s.substring(l, r + 1);
            min = Math.min(min, r - l + 1);
            l++;
        }
    }
    return minSub;
};