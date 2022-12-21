/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    if (nums.length < 1) return -1;
    const mid = Math.floor(nums.length / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
        const subResult = search(nums.slice(mid + 1), target);
        return subResult === -1 ? -1 : mid + subResult + 1;
    } 
    if (nums[mid] > target) return search(nums.slice(0, mid), target);
};