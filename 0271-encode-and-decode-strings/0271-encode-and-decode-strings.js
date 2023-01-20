/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
const encode = strs => {
    if (strs.length === 0) return String.fromCharCode(258);
    return strs.join(String.fromCharCode(257));
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
const decode = s => {
    if (s === String.fromCharCode(258)) return [];
    return s.split(String.fromCharCode(257));
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */