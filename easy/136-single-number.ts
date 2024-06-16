function singleNumber(nums: number[]): number {
    const hashSet = new Set<number>();
    for (const num of nums) {
        !hashSet.has(num) ? hashSet.add(num) : hashSet.delete(num);
    }

    return Array.from(hashSet)[0];
}
