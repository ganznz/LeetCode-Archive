const cloneGraph = node => {
    if (!node) return;

    const visited = new Map();

    const dfs = (n) => {
        if (visited.has(n)) return visited.get(n);
        
        const clone = new Node(n.val);
        visited.set(n, clone);

        for (let neighbor of n.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    }
    return dfs(node);
}

console.log(cloneGraph([[2,4],[1,3],[2,4],[1,3]]));