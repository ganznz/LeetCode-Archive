// const twoSum = (arr, target) => {
//     let ptr1 = 0, ptr2 = arr.length-1;
//     let canBreak = false;
//     for (let i = 0; i <= arr.length; i++) {
//         ptr1 = i;
//         for (let j = arr.length-1; j >= 0; j--) {
//             ptr2 = j;
//             if (arr[ptr1] + arr[ptr2] < target) break;
//             if (arr[ptr1] + arr[ptr2] == target) {
//                 canBreak = true;
//                 break;
//             }
//         }
//         if (canBreak) break;
//     }

//     return [ptr1 + 1, ptr2 + 1];
// }

/*
    REDO WITH O(n) COMPLEXITY
*/

const twoSum = (arr, target) => {
    let ptr1 = 0;
    let ptr2 = arr.length-1;
    let result;
    while (ptr1 < ptr2) {
        result = arr[ptr1] + arr[ptr2];
        if (result !== target) {
            result > target ? ptr2-- : ptr1++;
            continue;
        }
        return [ptr1+1, ptr2+1];
    }
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([2,3,4], 6));