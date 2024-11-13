// read this -- https://stackoverflow.com/questions/19545614/how-to-implement-a-multi-source-shortest-path-on-unweighted-graph-using-bfs

// const updateMatrix = mat => {
//     const distMatrix = [...mat]
//     for (let c = 0; c < mat.length; c++) {
//         for (let r = 0; r < mat[0].length; r++) {
//             const queue1 = new CircularQueue(mat.length * mat[0].length);
//             queue.enQueue([c, r])
//             let dist = 0;
//             outer: while (!queue.isEmpty()) {
//                 const queueSize = queue.size()
//                 for (let i = 0; i < queueSize; i++) {
//                     const currCoords = queue.Front();
//                     queue.deQueue();
//                     if (mat[currCoords[0]][currCoords[1]] == 0) {
//                         distMatrix[c][r] = dist;
//                         break outer;
//                     } else {
//                         if (currCoords[0]+1 < mat.length) queue.enQueue([currCoords[0]+1, currCoords[1]]);
//                         if (currCoords[0]-1 >= 0) queue.enQueue([currCoords[0]-1, currCoords[1]]);
//                         if (currCoords[1]+1 < mat[0].length) queue.enQueue([currCoords[0], currCoords[1]+1]);
//                         if (currCoords[1]-1 >= 0) queue.enQueue([currCoords[0], currCoords[1]-1]);
//                     }
//                 }
//                 dist++;
//             }
//         }
//     }
//     return distMatrix;
// }

// shit was timing out on testcase 49/50 :(
// implement with a multi-source bfs search instead
// waaaaaaay better time complexity too cuz we're doing the bfs in one pass through the matrice

const updateMatrix = mat => {
    const distances = Array.from({ length: mat.length }, () => Array(mat[0].length).fill(Infinity));
    const queue = [];

    // find all 0's and push to queue first
    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[0].length; c++) {
            if (mat[r][c] == 0) {
                distances[r][c] = 0;
                queue.push([r, c]);
            }
        }
    }

    // perform bfs
    while (queue.length > 0) {
        const [currR, currC] = queue.shift();
        const currDist = distances[currR][currC];

        // if the neighbouring nodes distance is more than current node dist + 1, then we perform bfs on that neighbouring node as we can update it w/ a better distance
        if (currR+1 < mat.length && distances[currR+1][currC] > currDist+1) {
            queue.push([currR+1, currC]);
            distances[currR+1][currC] = currDist + 1;
        }
        if (currR-1 >= 0 && distances[currR-1][currC] > currDist+1) {
            queue.push([currR-1, currC]);
            distances[currR-1][currC] = currDist + 1;
        }
        if (currC+1 < mat[0].length && distances[currR][currC+1] > currDist+1) {
            queue.push([currR, currC+1]);
            distances[currR][currC+1] = currDist + 1;
        }
        if (currC-1 >= 0 && distances[currR][currC-1] > currDist+1) {
            queue.push([currR, currC-1]);
            distances[currR][currC-1] = currDist + 1;
        }
    }
    return distances;
}

// [0,0,0]
// [0,1,0]
// [0,0,0]

updateMatrix([[0,0,0],[0,1,0],[0,0,0]]); // [[0,0,0],[0,1,0],[0,0,0]]
updateMatrix([[0,0,0],[0,1,0],[1,1,1]]); // [[0,0,0],[0,1,0],[1,2,1]]