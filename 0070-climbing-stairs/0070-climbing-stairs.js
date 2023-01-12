/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var stair_arr = new Array(n+1);
    stair_arr[0] = 0;
    stair_arr[1] = 1;
    stair_arr[2] = 2;
    for(let i = 3; i < n + 2; i++) {
        stair_arr[i] = stair_arr[i-2] + stair_arr[i-1]
    }
    return stair_arr[n];
};