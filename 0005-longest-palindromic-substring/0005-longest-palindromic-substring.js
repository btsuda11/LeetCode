/**
 * @param {string} s
 * @return {string}
 */


const longestPalindrome = s => {
    const table = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));
    let longest = '';
    
    for (let i = 0; i < s.length; i++) {
        table[i][i] = true;
        longest = s[i];
    }
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) table[i][i + 1] = true;
        if (table[i][i + 1]) longest = s.substring(i, i + 2);
    }
    
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 2; j < s.length; j++) {
            table[i][j] = table[i + 1][j - 1] && s[i] === s[j];
            if (table[i][j]) longest = longest.length < (j - i + 1) ? s.substring(i, j + 1) : longest;
        }
    }
    return longest;
};