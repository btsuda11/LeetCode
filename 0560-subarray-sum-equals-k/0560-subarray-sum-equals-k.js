/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
    const map = new Map([[0, 1]]);
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const comp = sum - k;
        if (map.has(comp)) count += map.get(comp);
        map.has(sum) ? map.set(sum, map.get(sum) + 1) : map.set(sum, 1);
    }
    return count;
};