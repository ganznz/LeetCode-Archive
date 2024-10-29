const spiralMatrix = arr => {
    const goalSize = arr.reduce((prev, curr) => prev.concat(curr), []).length;
    const xSize = arr[0].length;
    const ySize = arr.length;
    let direction = "right";
    let result = [];
    let seen = new Map(); // O(1) lookup & insertion
    let xIn = 0;
    let yIn = 0;
    
    while (result.length !== goalSize) {
        switch (direction) {
            case "right":
                seen.set(`${xIn}${yIn}`, arr[yIn][xIn]);
                result.push(arr[yIn][xIn]);
                if (xIn + 1 >= xSize || seen.has(`${xIn + 1}${yIn}`)) {
                    direction = "down";
                    yIn += 1;
                } else {
                    xIn += 1;
                }
                break;

            case "down":
                seen.set(`${xIn}${yIn}`, arr[yIn][xIn]);
                result.push(arr[yIn][xIn]);
                if (yIn + 1 >= ySize || seen.has(`${xIn}${yIn + 1}`)) {
                    direction = "left";
                    xIn -= 1;
                } else {
                    yIn += 1;
                }
                break;

            case "left":
                seen.set(`${xIn}${yIn}`, arr[yIn][xIn]);
                result.push(arr[yIn][xIn]);
                if (xIn - 1 < 0 || seen.has(`${xIn - 1}${yIn}`)) {
                    direction = "up";
                    yIn -= 1;
                } else {
                    xIn -= 1;
                }
                break;

            case "up":
                seen.set(`${xIn}${yIn}`, arr[yIn][xIn]);
                result.push(arr[yIn][xIn]);
                if (yIn - 1 < 0 || seen.has(`${xIn}${yIn -1}`)) {
                    direction = "right";
                    xIn += 1;
                } else {
                    yIn -= 1;
                }
                break;
        }
    }

    return result;
}

spiralMatrix([[1,2,3],[4,5,6],[7,8,9]])
spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]])