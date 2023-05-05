/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let l = 0;
    let maxVowelCount = 0;
    let subVowelCount = 0;
    for (let r = 0; r < s.length; r++) {
        if (vowels.includes(s[r])) subVowelCount++;
        if ((r - l + 1) !== k) {
            continue;
        } else {
            maxVowelCount = Math.max(maxVowelCount, subVowelCount);
            if (vowels.includes(s[l])) subVowelCount--;
            l++;
        }
    }
    return maxVowelCount;
};