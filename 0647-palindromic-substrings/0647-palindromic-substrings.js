/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = s => {
    let total = 0;
    
    const count = (s, i, j) => {
        let count = 0;
        while (i >= 0 && j < s.length && s[i] === s[j]) {
            i--;
            j++;
            count++;
        }
        return count;
    }
    
    for (let i = 0; i < s.length; i++) {
        total += count(s, i, i);
        total += count(s, i, i + 1);
    }
    return total;
};