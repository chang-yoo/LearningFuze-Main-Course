/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  for (let i = 0; i <= index; i++) {
    const value = queue.dequeue();
    if (i === index) {
      return value;
    }
    queue.enqueue(value);
  }
}
