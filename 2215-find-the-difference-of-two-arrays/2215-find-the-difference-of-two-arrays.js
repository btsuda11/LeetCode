/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const uniq1 = [];
    const uniq2 = [];
    for (let num of set1) {
        if (!set2.has(num)) uniq1.push(num);
    }
    for (let num of set2) {
        if (!set1.has(num)) uniq2.push(num);
    }
    return [uniq1, uniq2]
};