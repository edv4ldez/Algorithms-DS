class DynamicArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    // get an item at an index
    return this.data[index];
  }
  push(item) {
    // add an item to the end of the array
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    // remove the last item in the array
    delete this.data[this.length - 1];
    this.length--;
  }
  insert(index, item) {
    // add an item at any index
    if (index > this.length - 1 || index < 0) {
      return undefined;
    }
    // Create our new length
    this.length++;
    // Shift items up one spot from the insertion index to the new final spot in the array.
    // We iterate from the back since this is our new empty item
    for (let i = this.length - 1; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    // Add the new item
    this.data[index] = item;
    // Return the array
    return this.data;
  }
  remove(index) {
    // remove an item at any index
    if (index > this.length - 1 || index < 0) {
      return undefined;
    }
    // Shift items down one spot from the removal index to the end of the array.
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
