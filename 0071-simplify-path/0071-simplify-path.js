/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = path => {
    const stack = [];
    const arr = path.split('/');
    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        if (char === '.' || char === '') continue;
        if (char === '..') stack.pop();
        else stack.push(char);
    }
    return '/' + stack.join('/');
};