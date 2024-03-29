/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = n => {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if (n & 1 === 1) count++;
        n >>= 1;
    }
    return count;
};