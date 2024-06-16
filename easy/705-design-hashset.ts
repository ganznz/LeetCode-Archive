class MyHashSet {
    set: number[];
    constructor() {
        this.set = [];
    }

    add(key: number): void {
        if (!this.set.find((element) => element == key)) {
            this.set.push(key);
        }
    }

    remove(key: number): void {
        const index = this.set.indexOf(key);
        if (index !== -1) {
            this.set.splice(index, 1);
        }
    }

    contains(key: number): boolean {
        const index = this.set.indexOf(key);
        return index !== -1;
    }
}
