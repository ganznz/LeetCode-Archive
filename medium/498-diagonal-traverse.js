const diagonalTraverse = arr => {
    let result = []
    let xIn = 0;
    let yIn = 0;
    let direction = 0 /* 0=up-right, 1=down-left */
    const goalSize = arr.reduce((prev, curr) => prev.concat(curr), []).length
    const xSize = arr[0].length;
    const ySize = arr.length;
    while (result.length != goalSize) {
        if (direction == 0) {
            result.push(arr[yIn][xIn]);
            if ((xIn + 1 >= xSize || yIn - 1 < 0) && (result.length !== goalSize)) {
                direction = 1;
                if (xIn + 1 >= xSize && yIn - 1 < 0) { yIn += 1 }
                else if (xIn + 1 >= xSize) { yIn += 1 }
                else { xIn += 1 }
            } else {
                xIn += 1;
                yIn -= 1;
            }
        }
        
        if (direction == 1) {
            result.push(arr[yIn][xIn]);
            if ((xIn - 1 < 0 || yIn + 1 >= ySize) && (result.length !== goalSize)) {
                direction = 0;
                if (xIn - 1 < 0 && yIn + 1 >= ySize) { xIn += 1 }
                else if (xIn - 1 < 0) { yIn += 1 }
                else { xIn += 1 }
            } else {
                xIn -= 1;
                yIn += 1;
            }
        }
    }
    return result
}

diagonalTraverse([[1,2,3],[4,5,6],[7,8,9]])
diagonalTraverse([[1,2],[3,4]])
diagonalTraverse([[2,3]])