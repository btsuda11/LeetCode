/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = cost => {
    const newArr = new Array(cost.length);
    if (cost.length === 1) return cost[0];
    if (cost.length === 2) return Math.min(cost[0], cost[1]);
    newArr[cost.length - 1] = cost[cost.length - 1];
    newArr[cost.length - 2] = cost[cost.length - 2];
    for (let i = cost.length - 3; i >= 0; i--) {
        newArr[i] = Math.min(newArr[i + 2], newArr[i + 1]) + cost[i];
    }
    return Math.min(newArr[0], newArr[1]);
};