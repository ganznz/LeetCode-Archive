function intersection(nums1: number[], nums2: number[]): number[] {
    const arrToIterate = nums1.length > nums2.length ? nums1 : nums2;
    const hashSet1 = new Set<number>(nums1);
    const hashSet2 = new Set<number>(nums2);

    const resultHashSet = new Set<number>();
    for (const num of arrToIterate) {
        if (hashSet1.has(num) && hashSet2.has(num)) {
            resultHashSet.add(num);
        }
    }

    return Array.from(resultHashSet);
}
