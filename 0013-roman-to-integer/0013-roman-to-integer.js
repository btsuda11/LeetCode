/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    };
    let number = 0;
    for(let i = 0; i < s.length; i++) {
        if (Object.keys(roman).includes(s[i] + s[i + 1])) {
            number += roman[s[i] + s[i + 1]];
            i++;
        } else {
            number += roman[s[i]];
        }
    }
    return number;
};