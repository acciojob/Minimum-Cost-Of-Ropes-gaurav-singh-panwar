function calculateMinCost() {
  let str = document.getElementById('rope-lengths').value;
  let arr = str.split(",").map(Number);
  
  let total = 0;
  let heap = new MinHeap(arr); // Create a min heap
  
  while (heap.size() > 1) {
    let first = heap.extractMin(); // Extract the smallest element
    let second = heap.extractMin(); // Extract the next smallest element
    
    let sum = first + second;
    total += sum;
    
    heap.insert(sum); // Insert the sum back into the heap
  }
  
  let result = document.getElementById('result');
  result.innerHTML = total;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }
  
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  
  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }
    
    const min = this.heap[0];
    const last = this.heap.pop();
    
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    
    return min;
  }
  
  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      
      if (this.heap[parentIndex] <= this.heap[currentIndex]) {
        break;
      }
      
      [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
      currentIndex = parentIndex;
    }
  }
  
  heapifyDown() {
    let currentIndex = 0;
    let childIndex;
    
    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let swapIndex = null;
      
      if (leftChildIndex < this.heap.length) {
        if (this.heap[leftChildIndex] < this.heap[currentIndex]) {
          swapIndex = leftChildIndex;
        }
      }
      
      if (rightChildIndex < this.heap.length) {
        if (this.heap[rightChildIndex] < this.heap[currentIndex] && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
          swapIndex = rightChildIndex;
        }
      }
      
      if (swapIndex === null) {
        break;
      }
      
      [this.heap[currentIndex], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[currentIndex]];
      currentIndex = swapIndex;
    }
  }
  
  size() {
    return this.heap.length;
  }
}
