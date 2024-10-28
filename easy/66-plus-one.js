const plusOne = arr => {
    const result = (BigInt(arr.join("")) + BigInt("1")).toString().split("")

    for (let i = 0; i < result.length; i++) {
        result[i] = parseInt(result[i]);
    }
    return result;
}

console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([9]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))