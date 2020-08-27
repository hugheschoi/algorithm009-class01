class BinaryHeap {
	constructor () {
		this.d = 2
		this.heap = []
		this.heapSize = 0
	}
	BinaryHeap (capacity) {
		this.heapSize = 0;
		this.heap = new Array(capacity + 1).fill(-1)
	}
	isEmpty () {
		return this.heapSize === 0
	}
	isFull () {
		return this.heapSize === this.heap.length
	}
	parent (i) {
		return (i - 1) / d
	}
	ktnChild (i, k) {
		return this.d * i + k
	}
	insert (x) {
		if (isFull()) {
			throw Error('Heap is full, No space to insert new element')
		}
		this.heap[this.heapSize++] = x // 先在最后插入新元素
		this.heapifyUp(this.heapSize-1)
	}
	delete (index) {
		if (this.isEmpty()) {
			throw Error('Heap is empty, No elements to delete')
		}
		const heap = this.heap
		let maxElement = heap[index]
		heap[index] = heap[this.heapSize - 1]
		this.heapSize--
		this.heapifyDown(index)
		return maxElement
	}
	static heapifyUp (i) {
		const insertValue = this.heap[i]
		while (i > 0 && insertValue > this.heap[this.parent(i)]) {
			this.heap[i] = this.heap[this.parent(i)]
			i = this.parent(i)
		}
		this.heap[i] = insertValue 
	}
	static heapifyDown (i) {
		let child
		let temp = this.heap[i]
		while (this.kthChild(i, 1) < this.heapSize) {
			child = this.maxChild(i)
			if (temp >= this.heap[child]) {
				break
			}
			this.heap[i] = this.heap[child]
			i = child
		}
		this.heap[i] = temp
	}
	static maxChild (i) {
		let leftChild = this.kthChild(i, 1)
		let rightChild = this.kthChild(i, 2)
		return this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild
	}
}
