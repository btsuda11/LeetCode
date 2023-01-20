/**
 * @param {number[]} nums
 * @return {number}
 */



const longestConsecutive = nums => {
    if (nums.length === 1) return 1;
    
    const set = new Set();
    let longestCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (!set.has(num - 1)) {
            let currentCount = 1;
            while (set.has(num + 1)) {
                num++;
                currentCount++;
            }
            longestCount = Math.max(currentCount, longestCount);
        }
    }
    
    return longestCount;
};