/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    const mapS = {};
    const mapT = {};
    for(let i = 0; i < s.length; i++) {
        if (mapS[s[i]] === undefined && mapT[t[i]] === undefined) {
            mapS[s[i]] = t[i];
            mapT[t[i]] = s[i];
        } else if (!(mapS[s[i]] === t[i] && mapT[t[i]] === s[i])) {
            return false;
        }
    }    
    return true;
};