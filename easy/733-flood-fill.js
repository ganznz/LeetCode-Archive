import { CircularQueue } from "../ds-implementations/queue/circular-queue.js";

// bfs implementation
const floodFill = (img, sr, sc, colour) => {
    const queue = new CircularQueue(img.length * img[0].length);
    const seen = new Map();
    queue.enQueue([sr, sc]);
    
    while (!queue.isEmpty()) {
        const coords = queue.Front()
        seen.set(`${coords[0]}-${coords[1]}`, true);
        queue.deQueue();

        if (coords[0]+1 < img.length && img[coords[0]+1][coords[1]] == img[coords[0]][coords[1]] && !seen.has(`${coords[0]+1}-${coords[1]}`)) { queue.enQueue([coords[0]+1, coords[1]]) };
        if (coords[0]-1 >= 0 && img[coords[0]-1][coords[1]] == img[coords[0]][coords[1]] && !seen.has(`${coords[0]-1}-${coords[1]}`)) { queue.enQueue([coords[0]-1, coords[1]]) };
        if (coords[1]+1 < img[0].length && img[coords[0]][coords[1]+1] == img[coords[0]][coords[1]] && !seen.has(`${coords[0]}-${coords[1]+1}`)) { queue.enQueue([coords[0], coords[1]+1]) };
        if (coords[1]-1 >= 0 && img[coords[0]][coords[1]-1] == img[coords[0]][coords[1]] && !seen.has(`${coords[0]}-${coords[1]-1}`)) { queue.enQueue([coords[0], coords[1]-1]) };
        
        img[coords[0]][coords[1]] = colour;
    }
    return img;
}

// [1,1,1]
// [1,1,0]
// [1,0,1]

floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2);