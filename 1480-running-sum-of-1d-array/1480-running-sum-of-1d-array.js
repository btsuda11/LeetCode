/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = nums => {
    let sum = 0;
    const arr = [];
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        arr.push(sum);
    }
    return arr
};