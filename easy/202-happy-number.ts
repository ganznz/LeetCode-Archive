function isHappy(n: number): boolean {
    const visited = new Set<number>();
    let num = n;
    while (num !== 1) {
        if (visited.has(num)) {
            return false;
        }
        visited.add(num);

        let newNum = 0;
        for (const char of num.toString()) {
            newNum += parseInt(char) ** 2;
        }
        num = newNum;
    }
    return true;
}
