/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const map = {};
    for (let i = 0; i < magazine.length; i++) {
        map[magazine[i]] = map[magazine[i]] + 1 || 1;
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        if (!map[ransomNote[i]]) return false;
        else map[ransomNote[i]]--;
    }
    return true;
};