/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
    const carry = (a & b) << 1;
    if (carry === 0) return a ^ b;
    return getSum(a ^ b, carry);
};