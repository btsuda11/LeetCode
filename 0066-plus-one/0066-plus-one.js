/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
    let carry = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            carry = 1;
            if (i === 0 && carry === 1) {
                digits[i] = 0;
                digits.unshift(1);
            } else {
                digits[i] = 0;
            }
        } else if (i === digits.length - 1) {
            digits[i]++;
            break;
        } else {
            digits[i] += carry;
            break;
        }
    }
    return digits;
};