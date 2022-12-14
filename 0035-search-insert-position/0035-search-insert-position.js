/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    if (nums.length === 0) nums.push(target);
    const mid = Math.floor(nums.length / 2);
    if (nums[mid] > target) {
        return searchInsert(nums.slice(0, mid), target);
    } else if (nums[mid] < target) {
        const subResult = searchInsert(nums.slice(mid + 1), target);
        return subResult + mid + 1;
    } else {
        return mid;
    }
};