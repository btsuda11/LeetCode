/**
 * @param {string} digits
 * @return {string[]}
 */
const KEYBOARD = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}

const dfs = (startIndex, path, res, digits) => {
    if (startIndex === digits.length) {
        res.push(path.join(''));
        return;
    }
    
    for (let letter of KEYBOARD[digits[path.length]]) {
        path.push(letter);
        dfs(startIndex + 1, path, res, digits);
        path.pop();
    }
}

const letterCombinations = digits => {
    let res = [];
    if (digits.length === 0) return res;
    dfs(0, [], res, digits);
    return res;
};