const maxConsecutiveOnes = arr => {
    let max = 0;
    let temp = 0;
    for (const num of arr) {
        if (num == 1) {
            temp++;
            continue;
        }
        max = temp > max ? temp : max;
        temp = 0;
    }
    max = temp > max ? temp : max;
    return max;
}

maxConsecutiveOnes([1,1,0,1,1,1]);
maxConsecutiveOnes([1,0,1,1,0,1]);