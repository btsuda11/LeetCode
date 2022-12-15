/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = nums => {
    let sum = 0, sumLeft = 0;
    for(let i = 0; i < nums.length; i++) sum += nums[i];
    for(let i = 0; i < nums.length; i++) {
        if(sumLeft === sum - sumLeft - nums[i]) return i;
        sumLeft += nums[i];
    }
    return -1;
};