/* exported take2nd */

function take2nd(queue) {
  const value = queue.dequeue();
  if (queue.peek() === undefined) {
    return value;
  }
  const nextValue = queue.dequeue();
  queue.enqueue(value);
  return nextValue;
}
