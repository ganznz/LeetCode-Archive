const dominantIndex = arr => {
    const sorted = arr.toSorted((a, b) => a - b);
    if (sorted[arr.length - 1] >= sorted[arr.length -2] * 2) {
        return arr.indexOf(sorted[arr.length-1])
    }
    return -1
}

console.log(dominantIndex([3,6,1,0]))
console.log(dominantIndex([1,2,3,4]))