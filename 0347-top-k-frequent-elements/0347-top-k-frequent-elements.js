/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    const map = {};
    const res = [];
    for (const num of nums) {
        map[num] = map[num] + 1 || 1;
    }
    
    const sortedKeys = Object.keys(map).sort((a, b) => map[b] - map[a]);
    for (let i = 0; i < k; i++) {
        res.push(sortedKeys[i]);
    }
    return res;
};