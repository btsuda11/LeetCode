/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = node => {
    if (!node) return node;
    const visited = new Map();
    const dfs = node => {
        const newNode = new Node(node.val, []);
        visited.set(node, newNode);
        for (const neighbor of node.neighbors) {
            if (!visited.has(neighbor)) {
                const newNeighbor = dfs(neighbor);
                newNode.neighbors.push(newNeighbor);
            } else {
                const newNeighbor = visited.get(neighbor);
                newNode.neighbors.push(newNeighbor);
            }
        }
        return newNode;
    }
    return dfs(node);
};