// multi-source bfs implementation

const wallsAndGates = rooms => {
    const queue = [];

    // find all gates and push to queue
    for (let r=0; r < rooms.length; r++) {
        for (let c=0; c < rooms[0].length; c++) {
            if (rooms[r][c] !== 0) continue;
            queue.push([r,c]);
        }
    }

    while (queue.length > 0) {
        const [currR, currC] = queue[0];
        let dist = rooms[currR][currC];

        // check up
        if (currR-1 >= 0 && rooms[currR-1][currC] !== -1 && rooms[currR-1][currC] > dist + 1) {
            rooms[currR-1][currC] = dist + 1;
            queue.push([currR-1, currC]);
        }

        // check down
        if (currR+1 < rooms.length && rooms[currR+1][currC] !== -1 && rooms[currR+1][currC] > dist + 1) {
            rooms[currR+1][currC] = dist + 1;
            queue.push([currR+1, currC]);
        }

        // check left
        if (currC-1 >= 0 && rooms[currR][currC-1] !== -1 && rooms[currR][currC-1] > dist + 1) {
            rooms[currR][currC-1] = dist + 1;
            queue.push([currR, currC-1]);
        }

        // check right
        if (currC+1 < rooms[0].length && rooms[currR][currC+1] !== -1 && rooms[currR][currC+1] > dist + 1) {
            rooms[currR][currC+1] = dist + 1;
            queue.push([currR, currC+1]);
        }

        dist++;
        queue.shift();
    }

    return rooms;
}

console.log(wallsAndGates([[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]));
// output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]

console.log(wallsAndGates([[-1]]));
// output: [[-1]]