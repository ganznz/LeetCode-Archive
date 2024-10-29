const pascalsTriangle = numRows => {
    const result = [];
    for (let i = 1; i <= numRows; i++) {
        if (i == 1 || i == 2) {
            result.push([]);
            for (j = 0; j < i; j++) { result[i-1].splice(j, 0, 1); }
        }
        else {
            const sumArr = [];
            for (j = 1; j <= i-2; j++) {
                sumArr.push(result[i-2][j] + result[i-2][j-1]);
            }
            result.push([1].concat(sumArr).concat([1]));
        }
    }
    return result;
}

pascalsTriangle(5);
pascalsTriangle(1);