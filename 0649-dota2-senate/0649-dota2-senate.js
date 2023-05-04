/**
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = senate => {
    const n = senate.length;
    const radiant = [];
    const dire = [];
    for (let i = 0; i < senate.length; i++) {
        const party = senate[i];
        if (party === 'D') dire.push(i);
        else radiant.push(i);
    }
    while (dire.length > 0 && radiant.length > 0) {
        const d = dire.shift();
        const r = radiant.shift();
        if (d < r) {
            dire.push(d + n);
        } else {
            radiant.push(r + n);
        }
    }
    return dire.length > 0 ? 'Dire' : 'Radiant';
};