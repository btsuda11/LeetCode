/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
    const string = s.split("").filter(char => alphabet.includes(char) || alphabet.includes(char.toLowerCase()));
    return string.join("").toLowerCase() === string.reverse().join("").toLowerCase();
};