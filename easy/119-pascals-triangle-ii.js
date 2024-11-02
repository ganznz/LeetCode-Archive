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

pascalsTriangleII(3);
pascalsTriangleII(0);
pascalsTriangleII(1);