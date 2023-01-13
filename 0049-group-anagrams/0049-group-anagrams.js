/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
    const map = {};
    for (let i = 0; i < strs.length; i++) {
        let breakdown = new Array(26).fill(0);
        const word = strs[i];
        for (let j = 0; j < word.length; j++) {
            const letter = word[j];
            breakdown[letter.charCodeAt() - 97]++;
        }
        let key = breakdown.join('#');
        map[key] ? map[key].push(word) : map[key] = [word];
    }
    return Object.values(map);
};