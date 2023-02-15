/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countComponents = (n, edges) => {
    const graph = {};
    for (let pair of edges) {
        const [a, b] = pair;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    let count = 0;
    const set = new Set();
    const dfs = (graph, node) => {
        if (set.has(String(node))) return false;
        set.add(String(node));
        for (let neighbor of graph[node]) {
            dfs(graph, neighbor);
        }
        return true;
    }
    for (let node in graph) {
        if (set.has(node)) continue;
        if (dfs(graph, node)) count++;
    }
    return count + (n - Object.keys(graph).length);
};