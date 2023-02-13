class Heap {
    constructor() {
        this.heap = [ null ];
    }

    insert(value) {
        this.heap.push(val);
        let cur = this.heap.length-1;
        let parent = Math.floor(cur-1) / 2;

        // 추가한 값보다 부모 노드의 값이 더 큰 값이 나올 때 까지 root를 향해 Swap해간다.
        while(parent < val) {
            this.swap(this.heap[parent], this.heap[cur]);
            cur = parent;
            parent = Math.floor(cur-1) / 2;
        }
    }
}