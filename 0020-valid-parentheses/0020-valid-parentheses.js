/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
    const stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (let i = 0; i < s.length; i++) {
        if ('([{'.includes(s[i])) stack.push(s[i]);
        else if (stack[stack.length - 1] === map[s[i]]) stack.pop();
        else stack.push(s[i]);
    }
    return stack.length === 0;
}