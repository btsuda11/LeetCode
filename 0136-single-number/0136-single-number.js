/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
    let a = 0;
    for (let num of nums) {
        a ^= num;
    }
    return a;
};