const pascalsTriangleII = rowIndex => {
    let arr = [[1], [1,1]];
    for (let i = 2; i <= rowIndex; i++) {
        let rowResult = []
        for (let j = 1; j < i; j++) {
            rowResult.push(arr[i-1][j-1] + arr[i-1][j]);
        }
        arr.push([1].concat(rowResult).concat([1]));
    }
    return arr[rowIndex];
}

/* recursive implementation */
const recursivePascalsTriangleII = rowIndexToReturn => {
    const calcArrayValues = (prevRow, rowIndex, i, j) => {
        if (j == rowIndex) {
            return [];
        }
        const prevArr = calcArrayValues(prevRow, rowIndex, i+1, j+1);
        prevArr.unshift(prevRow[i] + prevRow[j]);
        return prevArr;
    }

    const recurse = (rowIndex, prevRow = []) => {
        let currRow;
        if (rowIndex == 0) {
            currRow = [1];
        } else if (rowIndex == 1) {
            currRow = [1,1];
        } else {
            currRow = [1].concat(calcArrayValues(prevRow, rowIndex, 0, 1)).concat([1]);
        }
        return rowIndex == rowIndexToReturn ? currRow : recurse(rowIndex + 1, currRow);
    }
    return recurse(0);
}

// output: [1,3,3,1]
console.log(pascalsTriangleII(3));
console.log(recursivePascalsTriangleII(3));

// output: [1]
console.log(pascalsTriangleII(0));
console.log(recursivePascalsTriangleII(0));

// output: [1,1]
console.log(pascalsTriangleII(1));
console.log(recursivePascalsTriangleII(1));