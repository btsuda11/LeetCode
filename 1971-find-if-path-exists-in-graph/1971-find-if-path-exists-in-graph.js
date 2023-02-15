/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = (n, edges, source, destination) => {
    const graph = {};
    for (let pair of edges) {
        const [ a, b ] = pair;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    const set = new Set();
    const hasPath = (graph, src, dst) => {
        if (src === dst) return true;
        if (set.has(src)) return false;
        set.add(src);
        for (let neighbor of graph[src]) {
            if (hasPath(graph, neighbor, dst)) return true;
        }
        return false;
    }
    return hasPath(graph, source, destination);
};