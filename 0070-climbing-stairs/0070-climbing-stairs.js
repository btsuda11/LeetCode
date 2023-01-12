/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
    const stairArr = new Array(n + 1);
    stairArr[0] = 0;
    stairArr[1] = 1;
    stairArr[2] = 2;
    for(let i = 3; i < n + 2; i++) {
        stairArr[i] = stairArr[i - 2] + stairArr[i - 1];
    }
    return stairArr[n];
};