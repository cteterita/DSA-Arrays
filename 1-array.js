let Memory = require('./memory');
let memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }
  push(value) {
    // Resize the array capacity allocated in memory if 
    // already at or over max
    if (this.length >= this._capacity) {
      // Resize to the new length times the size ratio
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    // Set the new value to the first free memory address in the array
    memory.set(this.ptr + this.length, value);
    // Increase the length by 1
    this.length++;
  }
  get(index) {
    // Throw an error if the index is invalid
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }
    // Return the value at the appropriate address
    return memory.get(this.ptr + index);
  }
  pop() {
    // Throw an error if the array is empty
    if (this.length == 0) {
        throw new Error('Index error');
    }
    // Grab the value from the end of the array
    const value = memory.get(this.ptr + this.length - 1);
    // Change the end of the array to the previous value
    // (Notably, don't actually free the memory that we 
    // popped))
    this.length--;
    // Return the popped value
    return value;
  }
  insert(index, value) {
    // Throw an error if the index is out of bounds
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }
    // Resize if the array is already at capacity
    if (this.length >= this._capacity) {
        this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    // Copy everything after the index to the next address
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    // Insert our value
    memory.set(this.ptr + index, value);
    // Increase the array length
    this.length++;
  }
  remove(index) {
    // Throw an error if the index is out of bounds
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }
    // Copy everything after the index into the previous spot in memory
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    // Decrement the array's length
    this.length--;
  }
  _resize(size) {
    const oldPtr = this.ptr;
    // Find a new memory address with enough free space
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
        throw new Error('Out of memory');
    }
    // Copy the array from the old address to the new address
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    // Assign the new capacity
    this._capacity = size;
  }
}

module.exports = Array;