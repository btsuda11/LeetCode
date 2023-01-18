/**
 * @param {string} queryIP
 * @return {string}
 */

const validIPv4 = queryIP => {
    const tokens = queryIP.split('.');
    if (tokens.length !== 4) return false;
    if (!tokens.every(token => /^(0|[1-9]\d*)$/.test(token))) return false;
    const components = tokens.map(token => parseInt(token, 10));
    return components.every(component => 0 <= component && component <= 255);
}

const validIPv6 = queryIP => {
    const tokens = queryIP.split(':');
    if (tokens.length !== 8) return false;
    return tokens.every(token => /^[\da-fA-F]{1,4}$/.test(token));
}

const validIPAddress = queryIP => {
    if (validIPv4(queryIP)) return 'IPv4';
    if (validIPv6(queryIP)) return 'IPv6';
    return 'Neither';
};