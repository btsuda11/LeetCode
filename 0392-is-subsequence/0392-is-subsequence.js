/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    const queue = [];
    for(let i = 0; i < s.length; i++) {
        queue.push(s[i]);
    }
    for(let i = 0; i < t.length; i++) {
        if (t[i] === queue[0]) queue.shift();
    }
    return queue.length === 0;
};