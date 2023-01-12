/**
 * @param {number} n
 * @return {number[]}
 */

const count = x => {
    let count = 0;
    while (x !== 0) {
        if (x & 1 === 1) count++;
        x >>= 1;
    }
    return count;
}

const countBits = n => {
    let arr = new Array(n + 1);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = count(i);
    }
    return arr;
};