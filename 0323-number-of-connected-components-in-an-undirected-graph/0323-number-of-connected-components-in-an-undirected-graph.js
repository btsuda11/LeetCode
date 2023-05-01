/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countComponents = (n, edges) => {
    const graph = {};
    for (let pair of edges) {
        const [a, b] = pair;
        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    const visited = new Set();
    let count = 0;
    const dfs = (graph, node) => {
        if (visited.has(String(node))) return false;
        visited.add(String(node));
        for (let neighbor of graph[node]) {
            dfs(graph, neighbor);
        }
        return true;
    }
    for (let node in graph) {
        if (visited.has(node)) continue;
        if (dfs(graph, node)) count++;
    }
    return count + (n - Object.keys(graph).length);
};