/**
 * @param {number} n
 * @return {number}
 */
const numSquares = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n === 0) return 0;
    let min = Infinity;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n - (i * i) >= 0) {
            min = Math.min(numSquares(n - (i * i), memo) + 1, min);
        }
    }
    return memo[n] = min;
};