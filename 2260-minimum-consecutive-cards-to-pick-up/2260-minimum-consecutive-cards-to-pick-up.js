/**
 * @param {number[]} cards
 * @return {number}
 */
const minimumCardPickup = cards => {
    let left = right = 0;
    const count = new Map();
    let shortest = cards.length + 1;
    while (right < cards.length) {
        const curr = cards[right];
        count.set(curr, count.has(curr) ? count.get(curr) + 1 : 1);
        while (count.get(curr) > 1) {
            shortest = Math.min(shortest, right - left + 1);
            count.set(cards[left], count.get(cards[left]) - 1);
            left++;
        }
        right++;
    }
    return shortest === cards.length + 1 ? -1 : shortest;
};